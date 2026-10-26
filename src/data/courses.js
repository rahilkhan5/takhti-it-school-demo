// Everything here is written for the demo: the school, instructors, courses,
// lessons, prices, ratings, learner numbers and reviews are made up.

export const school = {
  name: 'Takhti',
  full: 'Takhti IT School',
  city: 'Rawalpindi',
  tagline: 'Computer and IT courses online',
};

export const LEVELS = ['Beginner', 'Intermediate'];

export const CATEGORIES = {
  office: 'Office skills',
  web: 'Web and coding',
  design: 'Design',
  freelance: 'Freelancing',
};

export const PAYMENTS = {
  jazzcash: { label: 'JazzCash', note: 'You approve the payment in the JazzCash app.' },
  easypaisa: { label: 'Easypaisa', note: 'You approve the payment in the Easypaisa app.' },
  card: { label: 'Debit or credit card', note: 'Visa or Mastercard.' },
};

// The only coupon the demo knows.
export const COUPON = { code: 'DEMO50', off: 0.5 };

export const instructors = {
  ayesha: {
    name: 'Ayesha Siddiqui',
    role: 'Office skills trainer',
    bio: 'Has trained office staff and students in MS Office and computer basics for nine years. Teaches slowly and checks that everyone keeps up.',
  },
  hamza: {
    name: 'Hamza Qureshi',
    role: 'Front end developer',
    bio: 'Builds websites for small businesses in Rawalpindi and Islamabad. Started with HTML from YouTube and a borrowed laptop.',
  },
  bilal: {
    name: 'Bilal Ahmed',
    role: 'Python developer and data analyst',
    bio: 'Writes Python for a logistics company and teaches beginners on weekends. Likes turning boring office tasks into small scripts.',
  },
  mehwish: {
    name: 'Mehwish Raza',
    role: 'Brand and UI designer',
    bio: 'Designs brands and app screens from Lahore for clients in the Gulf and the UK. Started on Canva, now teaches Figma too.',
  },
  usman: {
    name: 'Usman Tariq',
    role: 'Full time freelancer',
    bio: 'Has freelanced since 2019, first as a writer and now with a small team of designers. Teaches what he wishes someone had told him.',
  },
};

const lesson = (id, title, mins, note, points, preview = false) => ({ id, title, mins, note, points, preview });

export const courses = [
  {
    slug: 'computer-basics',
    title: 'Computer Basics and MS Word',
    subtitle: 'Use a computer with confidence, type with all ten fingers and write a CV in MS Word.',
    category: 'office',
    level: 'Beginner',
    price: 0,
    hours: 4.5,
    instructor: 'ayesha',
    rating: 4.7,
    ratings: 1284,
    learners: 8920,
    updated: 'October 2026',
    outcomes: [
      'Use Windows files, folders and settings with confidence',
      'Type faster with the right finger positions',
      'Write and format a CV in MS Word',
      'Send documents by email and Google Drive',
      'Save, print and turn documents into PDF',
      'Stay safe online: passwords, codes and scams',
    ],
    requirements: ['A computer or laptop with Windows. A phone is enough to read the notes.', 'No experience needed.', 'About 30 minutes a day.'],
    description: [
      'This is the course for anyone who feels slow or nervous on a computer. We start with the desktop and the mouse, and finish with a one page CV you can send for a job the same day.',
      'Every lesson is short, uses everyday examples and ends with one small task to try on your own computer.',
    ],
    modules: [
      {
        title: 'Getting comfortable with Windows',
        lessons: [
          lesson('l1', 'Desktop, Start menu and taskbar', 12, 'A tour of the Windows desktop: the Start menu, the taskbar and how to open and close programs without fear.', ['Open programs from Start', 'Switch windows with the taskbar', 'Shut down the right way'], true),
          lesson('l2', 'Files and folders', 15, 'Create folders, move and rename files, and find anything you saved with File Explorer and search.', ['Make a folder for each task', 'Copy, move and rename files', 'Find lost files with search'], true),
          lesson('l3', 'Typing with all ten fingers', 18, 'Home row keys, finger positions and a short daily routine to go from 15 to 35 words a minute.', ['Rest on A S D F and J K L ;', 'Look at the screen, not the keys', 'Practise 10 minutes every day']),
        ],
      },
      {
        title: 'Writing in MS Word',
        lessons: [
          lesson('l4', 'Your first Word document', 14, 'Start a document, type, save it with a clear name and open it again later.', ['Save early with Ctrl + S', 'Use clear file names', 'Undo mistakes with Ctrl + Z']),
          lesson('l5', 'Formatting text and paragraphs', 16, 'Fonts, sizes, bold, alignment, bullet lists and line spacing, so your document looks neat.', ['One font for the whole page', 'Headings bigger, body text 11 or 12', 'Bullets for lists']),
          lesson('l6', 'A CV that gets read', 22, 'Build a one page CV with a clear heading, education, skills and experience, then save it as PDF.', ['Keep it to one page', 'Contact details at the top', 'Save as PDF before sending']),
        ],
      },
      {
        title: 'Internet, email and safety',
        lessons: [
          lesson('l7', 'Email like a professional', 15, 'Create a Gmail account, write a clear subject line, attach your CV and reply politely.', ['A short subject that says what it is', 'Attach files as PDF', 'Check before you press Send']),
          lesson('l8', 'Google Drive and sharing', 12, 'Upload files to Google Drive, share them with a link and keep a backup of important documents.', ['Upload and organise files', 'Share with view only links', 'Keep a backup in the cloud']),
          lesson('l9', 'Staying safe online', 14, 'Strong passwords, two step verification and how to spot fake messages that ask for your codes or money.', ['Never share OTP codes', 'A different password per account', 'Turn on two step verification']),
        ],
      },
    ],
    quiz: [
      { q: 'Which keyboard shortcut saves your document?', options: ['Ctrl + S', 'Ctrl + P', 'Ctrl + Z', 'Alt + F4'], answer: 0, why: 'Ctrl + S saves. Ctrl + P prints and Ctrl + Z undoes.' },
      { q: 'Where should your fingers rest when you type?', options: ['On the top row of letters', 'On A S D F and J K L ;', 'On the number keys', 'Anywhere comfortable'], answer: 1, why: 'The home row is A S D F and J K L ;. The small bumps on F and J help you find it without looking.' },
      { q: 'What is the best format to send your CV in?', options: ['A photo of the screen', 'A Word file only', 'PDF', 'A text message'], answer: 2, why: 'A PDF keeps your layout the same on every phone and computer.' },
      { q: 'Someone calls and asks for the code sent to your phone. What do you do?', options: ['Read it out quickly', 'Send it on WhatsApp', 'Never share it and hang up', 'Share half of it'], answer: 2, why: 'Real banks and companies never ask for your OTP code.' },
    ],
  },
  {
    slug: 'excel-office',
    title: 'Excel for Office Jobs',
    subtitle: 'Formulas, tables, charts and a salary sheet: the Excel that office job tests ask for.',
    category: 'office',
    level: 'Beginner',
    price: 0,
    hours: 5,
    instructor: 'ayesha',
    rating: 4.6,
    ratings: 902,
    learners: 6140,
    updated: 'September 2026',
    outcomes: [
      'Enter and format data in clean tables',
      'Use SUM, AVERAGE, IF and VLOOKUP',
      'Sort, filter and find data fast',
      'Make charts for a monthly report',
      'Build a salary sheet and a stock register',
      'Print and share sheets without layout problems',
    ],
    requirements: ['A laptop with Excel, or free Google Sheets.', 'Basic computer use.', 'No maths beyond school level.'],
    description: [
      'Almost every office job in Pakistan asks for Excel, and many interviews include a short Excel test. This course teaches exactly what those tests check, with the files you would really use at work.',
      'You will finish with a salary sheet, a stock register and a monthly report you can show in an interview.',
    ],
    modules: [
      {
        title: 'Excel basics',
        lessons: [
          lesson('l1', 'Rows, columns and cells', 12, 'What a workbook, a sheet and a cell are, and how to move around quickly with the keyboard.', ['Every cell has an address like B4', 'Tab and Enter move you along', 'Freeze the top row'], true),
          lesson('l2', 'Entering and formatting data', 15, 'Type numbers, dates and text the right way, then format them as rupees, dates and percentages.', ['Format money as Rs', 'One kind of data per column', 'Use borders lightly'], true),
          lesson('l3', 'Your first formulas', 16, 'Add, subtract and total columns with formulas and the SUM function.', ['Every formula starts with =', 'SUM adds a range', 'Drag to copy a formula']),
        ],
      },
      {
        title: 'Working with data',
        lessons: [
          lesson('l4', 'Sort and filter', 14, 'Sort a list by name or amount and filter it to show only what you need.', ['Sort A to Z or largest first', 'Filter by any column', 'Clear filters before sharing']),
          lesson('l5', 'IF and conditional formatting', 18, 'Let Excel decide for you: mark pass or fail, and show late payments in red.', ['IF(test, yes, no)', 'Highlight with rules', 'Keep rules simple']),
          lesson('l6', 'VLOOKUP and XLOOKUP', 20, 'Find a price, a name or a salary from another table with one formula.', ['Look up by a unique code', 'XLOOKUP is easier if you have it', 'Lock ranges with $']),
        ],
      },
      {
        title: 'Reports for the office',
        lessons: [
          lesson('l7', 'Charts that explain', 15, 'Turn a monthly sales table into a clear column or line chart.', ['One message per chart', 'Label the axes', 'Avoid 3D charts']),
          lesson('l8', 'A salary sheet from scratch', 22, 'Build a salary sheet with allowances, deductions and net pay for ten staff.', ['Keep inputs and results apart', 'Total with SUM', 'Check one row by hand']),
          lesson('l9', 'Printing and sharing', 12, 'Fit a sheet on one page, add a header and share it as PDF or a Google Sheets link.', ['Set the print area', 'Fit to one page wide', 'Share as PDF']),
        ],
      },
    ],
    quiz: [
      { q: 'Every Excel formula starts with which sign?', options: ['+', '=', '#', '@'], answer: 1, why: 'Formulas start with =, for example =SUM(B2:B10).' },
      { q: 'Which function adds up a range of cells?', options: ['ADD', 'TOTAL', 'SUM', 'PLUS'], answer: 2, why: 'SUM adds every number in the range.' },
      { q: 'You want to show Pass when marks are 40 or more. Which function do you use?', options: ['IF', 'VLOOKUP', 'SORT', 'COUNT'], answer: 0, why: 'IF(B2>=40, "Pass", "Fail") checks the marks and gives one of two answers.' },
      { q: 'What does the $ in $B$2 do?', options: ['Formats it as money', 'Keeps the cell fixed when you copy the formula', 'Deletes the cell', 'Makes it bold'], answer: 1, why: 'The $ stops the reference from moving when you drag the formula.' },
    ],
  },
  {
    slug: 'html-css',
    title: 'Web Design with HTML and CSS',
    subtitle: 'Build and publish your own website from scratch, no coding experience needed.',
    category: 'web',
    level: 'Beginner',
    price: 0,
    hours: 6,
    instructor: 'hamza',
    rating: 4.8,
    ratings: 1610,
    learners: 11300,
    updated: 'October 2026',
    outcomes: [
      'Write clean HTML pages from scratch',
      'Style pages with colours, fonts and spacing',
      'Build layouts with Flexbox',
      'Make sites that work on phones',
      'Add images, links and a contact form',
      'Put your site online for free',
    ],
    requirements: ['Any laptop: Windows, Mac or Linux.', 'The free VS Code editor, installed in lesson 2.', 'No coding experience.'],
    description: [
      'HTML and CSS are the first step into web development, freelancing and design jobs. In six hours you go from an empty folder to a real website on the internet with your own name on it.',
      'Every lesson builds the same site a little further, so by the end you have one finished project, not nine half ones.',
    ],
    modules: [
      {
        title: 'Your first web page',
        lessons: [
          lesson('l1', 'How websites work', 10, 'What happens when you open a website: browsers, servers and the three languages of the web.', ['HTML is the content', 'CSS is the look', 'JavaScript is the behaviour'], true),
          lesson('l2', 'Your first HTML file', 15, 'Install VS Code, create index.html and see your first page in the browser.', ['Save it as index.html', 'Open it in the browser', 'Live Server refreshes for you'], true),
          lesson('l3', 'Headings, paragraphs and links', 16, 'The tags you will use every day: h1 to h6, p, a and lists.', ['One h1 per page', 'Links use href', 'Indent nested tags']),
        ],
      },
      {
        title: 'Styling with CSS',
        lessons: [
          lesson('l4', 'Boxes, margin and padding', 18, 'Every element is a box. Learn padding, border and margin so spacing finally makes sense.', ['Padding is inside the border', 'Margin is outside it', 'Use box-sizing: border-box']),
          lesson('l5', 'Colours and fonts', 14, 'Pick a colour palette, load a Google Font and set text sizes people can read.', ['Two or three colours are enough', 'Body text 16px or more', 'Check the contrast']),
          lesson('l6', 'Flexbox layouts', 20, 'Put things side by side, centre anything and build a navigation bar with Flexbox.', ['display: flex on the parent', 'justify-content for the main axis', 'gap for spacing']),
        ],
      },
      {
        title: 'Publish your site',
        lessons: [
          lesson('l7', 'Images and forms', 16, 'Add images with alt text and build a contact form with labels and inputs.', ['Always write alt text', 'Every input needs a label', 'Compress your images']),
          lesson('l8', 'Making it work on phones', 18, 'Media queries and flexible widths, so your site looks right on a small phone.', ['Add the viewport meta tag', 'Design for phones first', 'Test at 360px wide']),
          lesson('l9', 'Put your site online free', 12, 'Publish your site on a free host and share the link in your CV and on WhatsApp.', ['Free hosting is enough to start', 'Pick a clear site name', 'Update by uploading again']),
        ],
      },
    ],
    quiz: [
      { q: 'Which language controls how a page looks?', options: ['HTML', 'CSS', 'Python', 'SQL'], answer: 1, why: 'CSS sets colours, fonts, spacing and layout. HTML holds the content.' },
      { q: 'The space inside an element’s border is called', options: ['Margin', 'Padding', 'Gap', 'Outline'], answer: 1, why: 'Padding is inside the border. Margin is outside it.' },
      { q: 'Which tag makes a link?', options: ['<link>', '<a>', '<p>', '<href>'], answer: 1, why: 'The a tag with an href attribute makes a link.' },
      { q: 'What helps a site fit a phone screen?', options: ['Bigger images', 'The viewport meta tag and media queries', 'More colours', 'A longer page'], answer: 1, why: 'The viewport tag and media queries let the layout change for small screens.' },
    ],
  },
  {
    slug: 'python',
    title: 'Python Programming for Beginners',
    subtitle: 'Write real programs, automate boring tasks and finish three projects for your portfolio.',
    category: 'web',
    level: 'Beginner',
    price: 5999,
    hours: 9,
    instructor: 'bilal',
    rating: 4.7,
    ratings: 743,
    learners: 3480,
    updated: 'October 2026',
    outcomes: [
      'Write Python programs from your very first line',
      'Use variables, lists, loops and functions',
      'Read and write files and CSV data',
      'Automate boring tasks like renaming files',
      'Build three small projects for your portfolio',
      'Get ready for data analysis or web development',
    ],
    requirements: ['A laptop. A phone is not enough for this course.', 'Python and VS Code, installed together in lesson 2.', 'Basic computer use.'],
    description: [
      'Python is the most asked for first programming language in job ads and on freelance sites. This course teaches it the way you would use it at work: small programs that save real time.',
      'You finish with an expense tracker, a file renamer and a sales report script, ready to show on GitHub.',
    ],
    modules: [
      {
        title: 'Python basics',
        lessons: [
          lesson('l1', 'Why Python, and what you will build', 8, 'What Python is used for in Pakistan and abroad, and the three projects you will finish in this course.', ['Used in data, web and automation', 'Easy to read and write', 'Three portfolio projects'], true),
          lesson('l2', 'Installing Python and VS Code', 14, 'Install Python and VS Code on Windows and run your first program: print("Salam").', ['Tick Add Python to PATH', 'Run with the play button', 'Read error messages calmly'], true),
          lesson('l3', 'Variables and data types', 18, 'Store numbers, text and true or false values, and change them while your program runs.', ['Names should say what they hold', 'int, float, str and bool', 'Print with f-strings']),
        ],
      },
      {
        title: 'Decisions and repetition',
        lessons: [
          lesson('l4', 'If, elif and else', 16, 'Let your program choose: grades from marks, discounts from a bill total.', ['Conditions are True or False', 'Indentation matters', 'Test every branch']),
          lesson('l5', 'Loops: for and while', 20, 'Repeat work without copying code: tables, totals and a small guessing game.', ['for loops over a list', 'while loops until a condition', 'Avoid endless loops']),
          lesson('l6', 'Lists and dictionaries', 22, 'Keep many values together: a list of students, a dictionary of prices.', ['Lists keep order', 'Dictionaries map keys to values', 'Loop over both']),
        ],
      },
      {
        title: 'Real programs',
        lessons: [
          lesson('l7', 'Functions', 18, 'Wrap code in functions you can reuse, with inputs and a return value.', ['def name(inputs):', 'return sends a value back', 'Small functions are easier to test']),
          lesson('l8', 'Files and CSV data', 20, 'Read a CSV of sales, total it and write a report file.', ['Open files with with', 'The csv module reads rows', 'Write results to a new file']),
          lesson('l9', 'Project: expense tracker', 30, 'Build an expense tracker that saves to a file and shows totals by month and category.', ['Plan before you code', 'Save after every change', 'Show totals by category']),
        ],
      },
    ],
    quiz: [
      { q: 'What does print("Salam") do?', options: ['Saves a file', 'Shows Salam on the screen', 'Deletes Salam', 'Asks the user a question'], answer: 1, why: 'print shows text in the terminal.' },
      { q: 'Which type stores the number 3.5?', options: ['int', 'str', 'float', 'bool'], answer: 2, why: 'Numbers with a decimal point are floats.' },
      { q: 'Why does indentation matter in Python?', options: ['It does not', 'It shows which lines belong to an if, a loop or a function', 'It makes code run faster', 'It is only for comments'], answer: 1, why: 'Python uses indentation to group lines into blocks.' },
      { q: 'What should store prices by product name?', options: ['A list', 'A dictionary', 'A string', 'A loop'], answer: 1, why: 'A dictionary maps keys, like product names, to values, like prices.' },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design with Canva and Figma',
    subtitle: 'Design posts, logos, flyers and app screens that clients pay for, without drawing skills.',
    category: 'design',
    level: 'Beginner',
    price: 3999,
    hours: 6,
    instructor: 'mehwish',
    rating: 4.6,
    ratings: 512,
    learners: 2960,
    updated: 'August 2026',
    outcomes: [
      'Use layout, colour and type with intention',
      'Design social media posts and ads in Canva',
      'Make a logo and a simple brand kit',
      'Design a mobile app screen in Figma',
      'Prepare files for print and for clients',
      'Build a portfolio for Fiverr or job applications',
    ],
    requirements: ['A laptop is best. Canva also works on a phone.', 'Free Canva and Figma accounts.', 'An eye for detail. No drawing skill needed.'],
    description: [
      'Small businesses everywhere need posts, flyers and logos every week. This course teaches the few design rules that make work look professional, then puts them to work in Canva and Figma.',
      'Every module ends with a piece for your portfolio, so you finish with six designs to show clients.',
    ],
    modules: [
      {
        title: 'Design basics',
        lessons: [
          lesson('l1', 'What makes a design look good', 12, 'Alignment, contrast and white space: the three rules behind every clean design.', ['Align everything to something', 'Make one thing the most important', 'Leave space to breathe'], true),
          lesson('l2', 'Colour and type', 16, 'Choose a colour palette and pair two fonts that work together.', ['One main colour, one accent', 'Two fonts at most', 'Check text is readable'], true),
          lesson('l3', 'A tour of Canva', 14, 'Templates, brand colours, elements and how to start from a blank canvas.', ['Start from the right size', 'Turn on the grid', 'Do not lean on templates']),
        ],
      },
      {
        title: 'Designs that sell',
        lessons: [
          lesson('l4', 'Instagram and Facebook posts', 20, 'Design a post and a story for a local business that people stop scrolling for.', ['One message per post', 'Big, readable text', 'Use real photos']),
          lesson('l5', 'A logo and brand kit', 22, 'Sketch, design and present a simple logo with colours and fonts for a client.', ['Simple shapes work small', 'Test it in black and white', 'Show it on mockups']),
          lesson('l6', 'Flyers and visiting cards for print', 16, 'Set up bleed and margins, and export a print ready PDF.', ['Add 3 mm bleed', 'Keep text inside the margins', 'Export as PDF Print']),
        ],
      },
      {
        title: 'Figma and your portfolio',
        lessons: [
          lesson('l7', 'Figma basics', 18, 'Frames, auto layout and components for designing app and web screens.', ['Frames are screens', 'Auto layout keeps spacing', 'Components for repeated parts']),
          lesson('l8', 'Design an app screen', 24, 'Design the home screen of a food delivery app with a clear hierarchy.', ['Start with the content', 'Use an 8px spacing grid', 'Show real names and prices']),
          lesson('l9', 'A portfolio that gets clients', 15, 'Put your six best designs on Behance and in a Fiverr gig.', ['Quality over quantity', 'Explain the problem you solved', 'Show before and after']),
        ],
      },
    ],
    quiz: [
      { q: 'What keeps text easy to read on a background?', options: ['Low contrast', 'High contrast', 'More fonts', 'Smaller text'], answer: 1, why: 'Strong contrast between text and background keeps it readable.' },
      { q: 'How many fonts should a simple design use?', options: ['One or two', 'Five', 'As many as possible', 'None'], answer: 0, why: 'One or two fonts keep a design calm and consistent.' },
      { q: 'What is bleed in print design?', options: ['Extra artwork past the cut line', 'A kind of font', 'Blur on photos', 'The paper weight'], answer: 0, why: 'Bleed is extra artwork past the edge, so no white line shows after cutting.' },
      { q: 'In Figma, what keeps spacing consistent for you?', options: ['Auto layout', 'The pen tool', 'Comments', 'Prototype mode'], answer: 0, why: 'Auto layout spaces items for you and adjusts when the content changes.' },
    ],
  },
  {
    slug: 'freelancing',
    title: 'Freelancing on Fiverr and Upwork',
    subtitle: 'Turn one skill into paid work: a gig that ranks, proposals that get replies and getting paid in Pakistan.',
    category: 'freelance',
    level: 'Beginner',
    price: 4499,
    hours: 5,
    instructor: 'usman',
    rating: 4.5,
    ratings: 689,
    learners: 4210,
    updated: 'October 2026',
    outcomes: [
      'Pick a skill that people pay for',
      'Create a Fiverr gig and Upwork profile that get views',
      'Write proposals that clients answer',
      'Price your work and handle revisions',
      'Get paid in Pakistan through Payoneer or your bank',
      'Keep clients coming back with good reviews',
    ],
    requirements: ['One skill you can offer, even a beginner one.', 'A laptop and an internet connection.', 'A bank account in your own name for payments.'],
    description: [
      'Thousands of Pakistanis earn online, and most of them started with one simple skill. This course is honest about how long the first order takes and shows the steps that get you there.',
      'You will set up your gig and profile while you learn, so by the last lesson they are live and ready for orders.',
    ],
    modules: [
      {
        title: 'Getting started',
        lessons: [
          lesson('l1', 'How freelancing really works', 12, 'What clients buy, how platforms take their fee and how long the first order usually takes.', ['Clients buy results, not hours', 'Platforms keep a fee', 'The first order takes patience'], true),
          lesson('l2', 'Choosing your skill', 14, 'Match what you can do with what clients search for, using the platforms’ own search.', ['Search before you choose', 'Start narrow', 'Improve while you earn'], true),
          lesson('l3', 'Your profile and photo', 12, 'A clear photo, a headline that says what you do and a short bio clients actually read.', ['A real, friendly photo', 'The headline names the skill', 'The bio talks about the client']),
        ],
      },
      {
        title: 'Winning work',
        lessons: [
          lesson('l4', 'A Fiverr gig that ranks', 20, 'Title, tags, packages and gig images that show up in search and get clicked.', ['Use the words buyers search', 'Three clear packages', 'The gig image shows the result']),
          lesson('l5', 'Upwork proposals that get replies', 18, 'Short proposals that answer the client’s problem in the first two lines.', ['Start with their problem', 'Show one relevant sample', 'End with a question']),
          lesson('l6', 'Pricing and revisions', 15, 'Set prices that cover your time and handle revision requests without losing the client.', ['Price by package', 'Limit revisions clearly', 'Raise prices after reviews']),
        ],
      },
      {
        title: 'Getting paid and growing',
        lessons: [
          lesson('l7', 'Getting paid in Pakistan', 14, 'Withdraw from Fiverr and Upwork to Payoneer or your bank, and keep records for tax.', ['Verify your account early', 'Withdraw in bigger amounts', 'Keep payment records']),
          lesson('l8', 'Talking to clients', 16, 'Polite, clear messages, deadlines you can keep and what to do when things go wrong.', ['Reply within a few hours', 'Confirm details in writing', 'Deliver a little early']),
          lesson('l9', 'From first order to repeat clients', 14, 'Turn one happy client into reviews, repeat orders and referrals.', ['Ask for a review politely', 'Offer a follow up package', 'Keep a client list']),
        ],
      },
    ],
    quiz: [
      { q: 'What do clients on Fiverr mainly pay for?', options: ['Your hours', 'A clear result', 'Your degree', 'Your city'], answer: 1, why: 'Clients buy the result they need, as your gig describes it.' },
      { q: 'How should an Upwork proposal start?', options: ['With your life story', 'With the client’s problem', 'With your price', 'With a long greeting'], answer: 1, why: 'Clients read the first two lines. Show that you understood their problem.' },
      { q: 'A client asks for a seventh revision on a two revision package. What is best?', options: ['Do it silently', 'Refuse rudely', 'Politely offer extra revisions as a paid add on', 'Cancel the order'], answer: 2, why: 'Be polite and clear: extra work can be a paid add on.' },
      { q: 'Why verify your payment account early?', options: ['It is not needed', 'So withdrawals are not stuck when you get paid', 'To get more orders', 'To change your country'], answer: 1, why: 'Verification can take days. Finish it before your first payment arrives.' },
    ],
  },
];

// Made-up reviews for the demo, each on the course it talks about.
export const reviews = [
  { slug: 'html-css', name: 'Sana, Faisalabad', stars: 5, text: 'I had never written code. By lesson 6 I had a page with my own name on it, and I sent the link to my brother in Dubai.' },
  { slug: 'python', name: 'Ali, Peshawar', stars: 5, text: 'The expense tracker finally made loops make sense. I study at night after work and it always opens where I stopped.' },
  { slug: 'excel-office', name: 'Rabia, Multan', stars: 5, text: 'I used the salary sheet lesson in my job interview test. Got the job.' },
  { slug: 'freelancing', name: 'Faizan, Karachi', stars: 4, text: 'Honest about how long the first order takes. My gig got its first order in week three.' },
  { slug: 'graphic-design', name: 'Hira, Lahore', stars: 5, text: 'Clear and practical. The print lesson saved me from a very expensive mistake with visiting cards.' },
  { slug: 'computer-basics', name: 'Kamran, Hyderabad', stars: 4, text: 'My typing went from 12 to 31 words a minute in one month.' },
];

export const faqs = [
  { q: 'Are the free courses really free?', a: 'Yes. Three courses are free in full. Open one and start, with no account and no card.' },
  { q: 'How do I pay for a paid course?', a: 'With JazzCash, Easypaisa or a debit or credit card at checkout. In this demo nothing is charged and no payment details are asked for.' },
  { q: 'Do I get a certificate?', a: 'Finish every lesson and pass the final quiz with at least 3 out of 4 to unlock a certificate with your name. In this demo it is an example certificate, not a real qualification.' },
  { q: 'Can I learn on my phone?', a: 'Yes. Lessons are light enough for mobile data, and your progress is saved on the phone or laptop you study on.' },
  { q: 'What language are the lessons in?', a: 'Simple English, with Urdu help wherever a word is new.' },
  { q: 'What if I get stuck?', a: 'Each lesson has notes and key points to read again. In a real school, this is where you would ask the instructor a question.' },
];
