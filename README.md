<div align="center">

# 🌸 Sakhi AI

### Government Help Made Simple

A multilingual, voice-enabled assistant that helps people understand Indian government schemes, covering eligibility, required documents, and how to apply.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Languages](https://img.shields.io/badge/Languages-5-pink)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Supported Schemes](#-supported-schemes)
- [Supported Languages](#-supported-languages)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Browser Support](#-browser-support)
- [Limitations](#-limitations)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Disclaimer](#-disclaimer)
- [License](#-license)

---

## 🌟 About the Project

Many citizens, especially women, farmers, and people in rural areas, miss out on government benefits because the information is hard to find, written in complex language, or not available in their mother tongue.

**Sakhi AI** (*"Sakhi"* means *a close friend*) is a simple, accessible web assistant that explains government schemes in plain language. Users can **type or speak** their question in their preferred language and receive a clear answer that is also **read aloud**. This makes the tool usable even for people with limited literacy or limited experience with technology.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **Multilingual Support** | Works in English, Tamil, Telugu, Hindi, and Kannada |
| 🎤 **Voice Input** | Speak your question using the browser's speech recognition |
| 🔊 **Voice Output** | Answers are read aloud in the selected language |
| 📋 **Scheme Selector** | Choose from 5 popular government schemes |
| ⚡ **Quick Help Buttons** | One-tap access to scheme info, eligibility, documents, and how to apply |
| 🧠 **Smart Question Detection** | Detects intent (eligibility, documents, apply, general info) from the question |
| 📱 **Responsive Design** | Clean, simple interface that works on desktop and mobile |
| 🚀 **No Backend Required** | Runs fully in the browser, with no installation or server setup |

---

## 🏛 Supported Schemes

1. **Pradhan Mantri Matru Vandana Yojana (PMMVY)**: maternity benefit for pregnant and lactating women
2. **PM-KISAN**: income support for eligible farmer families
3. **Beti Bachao Beti Padhao**: protection, education, and empowerment of the girl child
4. **Pradhan Mantri Ujjwala Yojana**: LPG connections for eligible households
5. **Ayushman Bharat**: health coverage for eligible beneficiaries

For each scheme, Sakhi AI provides four types of information: **Scheme Information**, **Eligibility**, **Required Documents**, and **How to Apply**.

---

## 🗣 Supported Languages

| Language | Text | Voice Input | Voice Output |
|---|:---:|:---:|:---:|
| English (India) | ✅ | ✅ `en-IN` | ✅ `en-IN` |
| Tamil | ✅ | ✅ `ta-IN` | ✅ `ta-IN` |
| Telugu | ✅ | ✅ `te-IN` | ✅ `te-IN` |
| Hindi | ✅ | ✅ `hi-IN` | ✅ `hi-IN` |
| Kannada | ✅ | ✅ `kn-IN` | ✅ `kn-IN` |

---

## 🛠 Tech Stack

- **HTML5**: page structure
- **CSS3**: styling and responsive layout
- **JavaScript (Vanilla)**: application logic and scheme data
- **Web Speech API**
  - `SpeechRecognition`: voice input
  - `SpeechSynthesis`: voice output

---

## ⚙️ How It Works

```
 User (Text / Voice)
        │
        ▼
 Select Language + Scheme
        │
        ▼
 Question Analysis (keyword detection)
        │
        ├── "eligible / eligibility" ──► Eligibility
        ├── "document(s)"            ──► Required Documents
        ├── "apply / application"    ──► How to Apply
        └── anything else            ──► Scheme Information
        │
        ▼
 Fetch answer from built-in multilingual dataset
        │
        ▼
 Display answer + Read it aloud
```

1. The user selects a **language** and a **government scheme**.
2. The user types a question, taps a **Quick Help** button, or uses the 🎤 **Speak** button.
3. The app scans the question for keywords to decide what the user wants to know.
4. The matching answer is pulled from the built-in dataset in the chosen language.
5. The answer is displayed on screen and **spoken aloud** using text-to-speech.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (**Google Chrome recommended**)
- A microphone, for voice input (optional)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/<your-username>/sakhi-ai.git
cd sakhi-ai
```

**2. Open the app**

Simply open `index.html` in your browser:
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or run a local server (recommended for reliable microphone access):
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```
Then visit `http://localhost:8000`.

---

## 💡 Usage

1. **Choose your language** from the dropdown.
2. **Select a government scheme**.
3. **Ask your question** in one of three ways:
   - ⌨️ Type it in the text box and click **🤖 Ask AI**
   - 🎤 Click **Speak** and say your question
   - ⚡ Tap a **Quick Help** button
4. Read the answer on screen or **listen** to it.

### Example Questions

| Question | Detected Intent |
|---|---|
| "What is this scheme?" | Scheme Information |
| "Who is eligible for the scheme?" | Eligibility |
| "What documents are required?" | Required Documents |
| "How can I apply?" | How to Apply |

---

## 📂 Project Structure

```
sakhi-ai/
├── index.html     # Page structure and UI
├── style.css      # Styling and layout
├── script.js      # Scheme data, language logic, voice input/output
└── README.md      # Project documentation
```

### Key Parts of `script.js`

| Section | Purpose |
|---|---|
| `schemes` | Multilingual data for all 5 schemes |
| `headings` | Translated section headings |
| `showWelcomeMessage()` | Language-specific greeting |
| `askAI()` | Core logic that detects intent and displays the answer |
| `askQuestion()` | Handles Quick Help buttons |
| Voice input block | Speech-to-text using the Web Speech API |
| `speakResponse()` | Text-to-speech output |

---

## 🌍 Browser Support

| Browser | Text | Voice Input | Voice Output |
|---|:---:|:---:|:---:|
| Google Chrome | ✅ | ✅ | ✅ |
| Microsoft Edge | ✅ | ✅ | ✅ |
| Safari | ✅ | ⚠️ Limited | ✅ |
| Firefox | ✅ | ❌ | ✅ |

> 💡 Voice quality and the availability of Indian-language voices depend on the user's device and browser.

---

## ⚠️ Limitations

- Answers come from a **fixed, built-in dataset**, not a live government database or an AI model.
- Question understanding uses **English keyword matching**, so questions in other languages usually return general scheme information.
- Scheme details are **general in nature**. Exact benefit amounts and the latest rules are not included.
- Voice features need a supported browser and, for speech recognition, an internet connection.

---

## 🗺 Future Enhancements

- [ ] Keyword and intent detection in all supported languages
- [ ] Integration with an LLM for natural, open-ended answers
- [ ] More schemes (e.g., Sukanya Samriddhi, PM Awas Yojana, Jan Dhan)
- [ ] Eligibility checker with step-by-step questions
- [ ] Links to official application portals
- [ ] Support for more Indian languages
- [ ] Offline support (PWA)
- [ ] Chat history view

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-scheme`)
3. Commit your changes (`git commit -m "Add new scheme"`)
4. Push to the branch (`git push origin feature/new-scheme`)
5. Open a Pull Request

### Adding a New Scheme

Add a new entry to the `schemes` object in `script.js` with `name`, `information`, `eligibility`, `documents`, and `apply` fields in all five languages. Then add a matching `<option>` to the scheme dropdown in `index.html`.

---

## 📢 Disclaimer

Sakhi AI provides **general informational guidance only** and is **not an official government service**. Scheme rules, eligibility, and documents change over time. Please verify details with official government websites or authorised service centres before applying.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

🌸 **Sakhi AI** | Simple • Accessible • Helpful

Made with ❤️ to make government help reachable for everyone.

⭐ Star this repo if you find it useful!

</div>
