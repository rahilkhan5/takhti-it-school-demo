// Shared helpers for the build and for the browser scripts. Enrolment,
// progress and quiz results live in this browser only.

export const rupees = (n) => `Rs ${Math.round(n).toLocaleString('en-PK')}`;
export const priceLabel = (c) => (c.price ? rupees(c.price) : 'Free');
export const count = (n) => n.toLocaleString('en-PK');

export const lessonsOf = (course) => course.modules.flatMap((m) => m.lessons);
export const totalMins = (course) => lessonsOf(course).reduce((n, l) => n + l.mins, 0);
export const minutes = (m) => (m >= 60 ? `${Math.floor(m / 60)} hr ${m % 60} min` : `${m} min`);

export const ENROL_KEY = 'tk-enrolled';
export const PROGRESS_KEY = 'tk-progress';
export const QUIZ_KEY = 'tk-quiz';
export const NAME_KEY = 'tk-name';
export const PASS_MARK = 3;

export function readStore(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export const enrolments = () => readStore(ENROL_KEY, {});
export const isEnrolled = (slug) => Boolean(enrolments()[slug]);

export function enrol(slug, info = {}) {
  const all = enrolments();
  all[slug] = { at: new Date().toISOString(), ...info };
  const ok = writeStore(ENROL_KEY, all);
  window.dispatchEvent(new Event('tk:change'));
  return ok;
}

export const doneIds = (slug) => readStore(PROGRESS_KEY, {})[slug] ?? [];

export function setDone(slug, id, done = true) {
  const all = readStore(PROGRESS_KEY, {});
  const list = new Set(all[slug] ?? []);
  if (done) list.add(id);
  else list.delete(id);
  all[slug] = [...list];
  writeStore(PROGRESS_KEY, all);
  window.dispatchEvent(new Event('tk:change'));
}

export const quizResult = (slug) => readStore(QUIZ_KEY, {})[slug] ?? null;

export function saveQuiz(slug, score, total) {
  const all = readStore(QUIZ_KEY, {});
  const best = Math.max(score, all[slug]?.score ?? 0);
  all[slug] = { score: best, total, passed: best >= PASS_MARK, at: new Date().toISOString() };
  writeStore(QUIZ_KEY, all);
  window.dispatchEvent(new Event('tk:change'));
  return all[slug];
}

// Where a learner stands in one course.
export function standing(course) {
  const all = lessonsOf(course);
  const done = new Set(doneIds(course.slug));
  const finished = all.filter((l) => done.has(l.id)).length;
  const next = all.find((l) => !done.has(l.id)) ?? null;
  const quiz = quizResult(course.slug);
  return {
    enrolled: isEnrolled(course.slug),
    finished,
    total: all.length,
    percent: Math.round((finished / all.length) * 100),
    next,
    nextIndex: next ? all.indexOf(next) + 1 : all.length,
    quiz,
    certificate: finished === all.length && Boolean(quiz?.passed),
  };
}

// A stable certificate number for a course and a name.
export function certificateId(slug, name) {
  let h = 7;
  for (const ch of `${slug}:${name}`) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return `TKH-2026-${String(h % 100000).padStart(5, '0')}`;
}
