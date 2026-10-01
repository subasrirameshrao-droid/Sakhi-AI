```javascript
// ===============================
// SAKHI AI - GOVERNMENT SCHEMES
// ===============================

let selectedLanguage = "English";

// ===============================
// SCHEME DATA
// ===============================

const schemes = {

    PMMVY: {
        name: {
            English: "Pradhan Mantri Matru Vandana Yojana",
            Tamil: "பிரதான் மந்திரி மாத்ரு வந்தனா யோஜனா",
            Telugu: "ప్రధాన్ మంత్రి మాతృ వందన యోజన",
            Hindi: "प्रधानमंत्री मातृ वंदना योजना",
            Kannada: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮಾತೃ ವಂದನಾ ಯೋಜನೆ"
        },

        information: {
            English: "PMMVY is a maternity benefit scheme for eligible pregnant and lactating women.",
            Tamil: "PMMVY என்பது தகுதியுள்ள கர்ப்பிணி மற்றும் பாலூட்டும் பெண்களுக்கான மகப்பேறு நலத்திட்டமாகும்.",
            Telugu: "PMMVY అనేది అర్హత కలిగిన గర్భిణీ మరియు పాలిచ్చే మహిళల కోసం రూపొందించిన ప్రసూతి ప్రయోజన పథకం.",
            Hindi: "PMMVY पात्र गर्भवती और स्तनपान कराने वाली महिलाओं के लिए एक मातृत्व लाभ योजना है।",
            Kannada: "PMMVY ಅರ್ಹ ಗರ್ಭಿಣಿ ಮತ್ತು ಹಾಲುಣಿಸುವ ಮಹಿಳೆಯರಿಗಾಗಿ ಇರುವ ಮಾತೃತ್ವ ಪ್ರಯೋಜನ ಯೋಜನೆಯಾಗಿದೆ."
        },

        eligibility: {
            English: "Eligible pregnant and lactating women can apply according to the current government rules.",
            Tamil: "தற்போதைய அரசு விதிகளின்படி தகுதியுள்ள கர்ப்பிணி மற்றும் பாலூட்டும் பெண்கள் விண்ணப்பிக்கலாம்.",
            Telugu: "ప్రస్తుత ప్రభుత్వ నిబంధనల ప్రకారం అర్హత కలిగిన గర్భిణీ మరియు పాలిచ్చే మహిళలు దరఖాస్తు చేసుకోవచ్చు.",
            Hindi: "वर्तमान सरकारी नियमों के अनुसार पात्र गर्भवती और स्तनपान कराने वाली महिलाएं आवेदन कर सकती हैं।",
            Kannada: "ಪ್ರಸ್ತುತ ಸರ್ಕಾರಿ ನಿಯಮಗಳ ಪ್ರಕಾರ ಅರ್ಹ ಗರ್ಭಿಣಿ ಮತ್ತು ಹಾಲುಣಿಸುವ ಮಹಿಳೆಯರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು."
        },

        documents: {
            English: "Aadhaar, bank account details and pregnancy-related documents may be required.",
            Tamil: "ஆதார், வங்கி கணக்கு விவரங்கள் மற்றும் கர்ப்பம் தொடர்பான ஆவணங்கள் தேவைப்படலாம்.",
            Telugu: "ఆధార్, బ్యాంక్ ఖాతా వివరాలు మరియు గర్భధారణకు సంబంధించిన పత్రాలు అవసరం కావచ్చు.",
            Hindi: "आधार, बैंक खाते का विवरण और गर्भावस्था से संबंधित दस्तावेज़ आवश्यक हो सकते हैं।",
            Kannada: "ಆಧಾರ್, ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರಗಳು ಮತ್ತು ಗರ್ಭಧಾರಣೆಗೆ ಸಂಬಂಧಿಸಿದ ದಾಖಲೆಗಳು ಬೇಕಾಗಬಹುದು."
        },

        apply: {
            English: "Eligible beneficiaries can apply through authorised government service centres.",
            Tamil: "தகுதியுள்ள பயனாளிகள் அங்கீகரிக்கப்பட்ட அரசு சேவை மையங்கள் மூலம் விண்ணப்பிக்கலாம்.",
            Telugu: "అర్హత కలిగిన లబ్ధిదారులు అధికారిక ప్రభుత్వ సేవా కేంద్రాల ద్వారా దరఖాస్తు చేసుకోవచ్చు.",
            Hindi: "पात्र लाभार्थी अधिकृत सरकारी सेवा केंद्रों के माध्यम से आवेदन कर सकते हैं।",
            Kannada: "ಅರ್ಹ ಫಲಾನುಭವಿಗಳು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಸೇವಾ ಕೇಂದ್ರಗಳ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು."
        }
    },


    "PM-KISAN": {
        name: {
            English: "PM-KISAN",
            Tamil: "PM-KISAN",
            Telugu: "PM-KISAN",
            Hindi: "PM-KISAN",
            Kannada: "PM-KISAN"
        },

        information: {
            English: "PM-KISAN is a government income-support scheme for eligible farmer families.",
            Tamil: "PM-KISAN என்பது தகுதியுள்ள விவசாய குடும்பங்களுக்கு வருமான ஆதரவு வழங்கும் அரசு திட்டமாகும்.",
            Telugu: "PM-KISAN అనేది అర్హత కలిగిన రైతు కుటుంబాలకు ఆదాయ సహాయం అందించే ప్రభుత్వ పథకం.",
            Hindi: "PM-KISAN पात्र किसान परिवारों के लिए आय सहायता प्रदान करने वाली सरकारी योजना है।",
            Kannada: "PM-KISAN ಅರ್ಹ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ಆದಾಯ ಬೆಂಬಲ ನೀಡುವ ಸರ್ಕಾರಿ ಯೋಜನೆಯಾಗಿದೆ."
        },

        eligibility: {
            English: "Eligible farmer families can receive PM-KISAN benefits according to the current government rules.",
            Tamil: "தற்போதைய அரசு விதிகளின்படி தகுதியுள்ள விவசாய குடும்பங்கள் PM-KISAN நன்மைகளைப் பெறலாம்.",
            Telugu: "ప్రస్తుత ప్రభుత్వ నిబంధనల ప్రకారం అర్హత కలిగిన రైతు కుటుంబాలు PM-KISAN ప్రయోజనాలను పొందవచ్చు.",
            Hindi: "वर्तमान सरकारी नियमों के अनुसार पात्र किसान परिवार PM-KISAN का लाभ प्राप्त कर सकते हैं।",
            Kannada: "ಪ್ರಸ್ತುತ ಸರ್ಕಾರಿ ನಿಯಮಗಳ ಪ್ರಕಾರ ಅರ್ಹ ರೈತ ಕುಟುಂಬಗಳು PM-KISAN ಪ್ರಯೋಜನಗಳನ್ನು ಪಡೆಯಬಹುದು."
        },

        documents: {
            English: "Aadhaar details, bank account information and land-related records may be required.",
            Tamil: "ஆதார் விவரங்கள், வங்கி கணக்கு தகவல்கள் மற்றும் நிலம் தொடர்பான பதிவுகள் தேவைப்படலாம்.",
            Telugu: "ఆధార్ వివరాలు, బ్యాంక్ ఖాతా సమాచారం మరియు భూమికి సంబంధించిన రికార్డులు అవసరం కావచ్చు.",
            Hindi: "आधार विवरण, बैंक खाते की जानकारी और भूमि से संबंधित रिकॉर्ड आवश्यक हो सकते हैं।",
            Kannada: "ಆಧಾರ್ ವಿವರಗಳು, ಬ್ಯಾಂಕ್ ಖಾತೆ ಮಾಹಿತಿ ಮತ್ತು ಭೂಮಿಗೆ ಸಂಬಂಧಿಸಿದ ದಾಖಲೆಗಳು ಬೇಕಾಗಬಹುದು."
        },

        apply: {
            English: "Eligible farmers can register through the official PM-KISAN process.",
            Tamil: "தகுதியுள்ள விவசாயிகள் அதிகாரப்பூர்வ PM-KISAN செயல்முறை மூலம் பதிவு செய்யலாம்.",
            Telugu: "అర్హత కలిగిన రైతులు అధికారిక PM-KISAN ప్రక్రియ ద్వారా నమోదు చేసుకోవచ్చు.",
            Hindi: "पात्र किसान आधिकारिक PM-KISAN प्रक्रिया के माध्यम से पंजीकरण कर सकते हैं।",
            Kannada: "ಅರ್ಹ ರೈತರು ಅಧಿಕೃತ PM-KISAN ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ನೋಂದಾಯಿಸಬಹುದು."
        }
    },


    BetiBachao: {
        name: {
            English: "Beti Bachao Beti Padhao",
            Tamil: "பெண் குழந்தையை காப்போம், பெண் குழந்தையை படிக்க வைப்போம்",
            Telugu: "బేటీ బచావో బేటీ పడావో",
            Hindi: "बेटी बचाओ बेटी पढ़ाओ",
            Kannada: "ಬೇಟಿ ಬಚಾವೋ ಬೇಟಿ ಪಢಾವೋ"
        },

        information: {
            English: "Beti Bachao Beti Padhao is a government programme focused on the protection, education and empowerment of the girl child.",
            Tamil: "பெண் குழந்தையை காப்போம், பெண் குழந்தையை படிக்க வைப்போம் என்பது பெண் குழந்தைகளின் பாதுகாப்பு, கல்வி மற்றும் முன்னேற்றத்தை நோக்கமாகக் கொண்ட அரசு திட்டமாகும்.",
            Telugu: "బేటీ బచావో బేటీ పడావో అనేది బాలికల రక్షణ, విద్య మరియు సాధికారతపై దృష్టి సారించే ప్రభుత్వ కార్యక్రమం.",
            Hindi: "बेटी बचाओ बेटी पढ़ाओ बालिकाओं की सुरक्षा, शिक्षा और सशक्तिकरण पर ध्यान केंद्रित करने वाला सरकारी कार्यक्रम है।",
            Kannada: "ಬೇಟಿ ಬಚಾವೋ ಬೇಟಿ ಪಢಾವೋ ಹೆಣ್ಣು ಮಕ್ಕಳ ರಕ್ಷಣೆ, ಶಿಕ್ಷಣ ಮತ್ತು ಸಬಲೀಕರಣದ ಮೇಲೆ ಗಮನಹರಿಸುವ ಸರ್ಕಾರಿ ಕಾರ್ಯಕ್ರಮವಾಗಿದೆ."
        },

        eligibility: {
            English: "The programme focuses on the welfare, protection and education of girls.",
            Tamil: "இந்த திட்டம் பெண் குழந்தைகளின் நலன், பாதுகாப்பு மற்றும் கல்வியில் கவனம் செலுத்துகிறது.",
            Telugu: "ఈ కార్యక్రమం బాలికల సంక్షేమం, రక్షణ మరియు విద్యపై దృష్టి సారిస్తుంది.",
            Hindi: "यह कार्यक्रम बालिकाओं के कल्याण, सुरक्षा और शिक्षा पर ध्यान केंद्रित करता है।",
            Kannada: "ಈ ಕಾರ್ಯಕ್ರಮವು ಹೆಣ್ಣು ಮಕ್ಕಳ ಕಲ್ಯಾಣ, ರಕ್ಷಣೆ ಮತ್ತು ಶಿಕ್ಷಣದ ಮೇಲೆ ಗಮನಹರಿಸುತ್ತದೆ."
        },

        documents: {
            English: "Documents depend on the particular service being accessed.",
            Tamil: "தேவையான ஆவணங்கள் பெறப்படும் குறிப்பிட்ட சேவையைப் பொறுத்து மாறுபடும்.",
            Telugu: "అవసరమైన పత్రాలు పొందే సేవను బట్టి మారవచ్చు.",
            Hindi: "आवश्यक दस्तावेज़ संबंधित सेवा के अनुसार अलग-अलग हो सकते हैं।",
            Kannada: "ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳು ಪಡೆಯುವ ಸೇವೆಯನ್ನು ಅವಲಂಬಿಸಿ ಬದಲಾಗಬಹುದು."
        },

        apply: {
            English: "Information and related services can be accessed through appropriate government departments.",
            Tamil: "தகவல்கள் மற்றும் தொடர்புடைய சேவைகளை சம்பந்தப்பட்ட அரசு துறைகள் மூலம் பெறலாம்.",
            Telugu: "సంబంధిత ప్రభుత్వ శాఖల ద్వారా సమాచారం మరియు సంబంధిత సేవలను పొందవచ్చు.",
            Hindi: "संबंधित सरकारी विभागों के माध्यम से जानकारी और संबंधित सेवाओं का लाभ लिया जा सकता है।",
            Kannada: "ಸಂಬಂಧಿತ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳ ಮೂಲಕ ಮಾಹಿತಿ ಮತ್ತು ಸಂಬಂಧಿತ ಸೇವೆಗಳನ್ನು ಪಡೆಯಬಹುದು."
        }
    },


    Ujjwala: {
        name: {
            English: "Pradhan Mantri Ujjwala Yojana",
            Tamil: "பிரதான் மந்திரி உஜ்வாலா யோஜனா",
            Telugu: "ప్రధాన్ మంత్రి ఉజ్వల యోజన",
            Hindi: "प्रधानमंत्री उज्ज्वला योजना",
            Kannada: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಉಜ್ವಲ ಯೋಜನೆ"
        },

        information: {
            English: "Pradhan Mantri Ujjwala Yojana supports eligible households in getting access to LPG connections.",
            Tamil: "பிரதான் மந்திரி உஜ்வாலா யோஜனா தகுதியுள்ள குடும்பங்களுக்கு LPG இணைப்பைப் பெற உதவுகிறது.",
            Telugu: "ప్రధాన్ మంత్రి ఉజ్వల యోజన అర్హత కలిగిన కుటుంబాలకు LPG కనెక్షన్ పొందడానికి సహాయం చేస్తుంది.",
            Hindi: "प्रधानमंत्री उज्ज्वला योजना पात्र परिवारों को LPG कनेक्शन प्राप्त करने में सहायता करती है।",
            Kannada: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಉಜ್ವಲ ಯೋಜನೆಯು ಅರ್ಹ ಕುಟುಂಬಗಳಿಗೆ LPG ಸಂಪರ್ಕ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."
        },

        eligibility: {
            English: "Eligibility depends on the current government criteria.",
            Tamil: "தகுதி தற்போதைய அரசு விதிமுறைகளைப் பொறுத்தது.",
            Telugu: "అర్హత ప్రస్తుత ప్రభుత్వ ప్రమాణాలపై ఆధారపడి ఉంటుంది.",
            Hindi: "पात्रता वर्तमान सरकारी मानदंडों पर निर्भर करती है।",
            Kannada: "ಅರ್ಹತೆಯು ಪ್ರಸ್ತುತ ಸರ್ಕಾರಿ ಮಾನದಂಡಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ."
        },

        documents: {
            English: "Aadhaar, address or household documents may be required.",
            Tamil: "ஆதார், முகவரி அல்லது குடும்ப ஆவணங்கள் தேவைப்படலாம்.",
            Telugu: "ఆధార్, చిరునామా లేదా కుటుంబానికి సంబంధించిన పత్రాలు అవసరం కావచ్చు.",
            Hindi: "आधार, पता या परिवार से संबंधित दस्तावेज़ आवश्यक हो सकते हैं।",
            Kannada: "ಆಧಾರ್, ವಿಳಾಸ ಅಥವಾ ಕುಟುಂಬದ ದಾಖಲೆಗಳು ಬೇಕಾಗಬಹುದು."
        },

        apply: {
            English: "Eligible applicants can apply through an authorised LPG distributor.",
            Tamil: "தகுதியுள்ள விண்ணப்பதாரர்கள் அங்கீகரிக்கப்பட்ட LPG விநியோகஸ்தர் மூலம் விண்ணப்பிக்கலாம்.",
            Telugu: "అర్హత కలిగిన దరఖాస్తుదారులు అధికారిక LPG పంపిణీదారుడి ద్వారా దరఖాస్తు చేసుకోవచ్చు.",
            Hindi: "पात्र आवेदक अधिकृत LPG वितरक के माध्यम से आवेदन कर सकते हैं।",
            Kannada: "ಅರ್ಹ ಅರ್ಜಿದಾರರು ಅಧಿಕೃತ LPG ವಿತರಕರ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು."
        }
    },


    Ayushman: {
        name: {
            English: "Ayushman Bharat",
            Tamil: "ஆயுஷ்மான் பாரத்",
            Telugu: "ఆయుష్మాన్ భారత్",
            Hindi: "आयुष्मान भारत",
            Kannada: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್"
        },

        information: {
            English: "Ayushman Bharat is a government healthcare programme that provides health coverage to eligible beneficiaries.",
            Tamil: "ஆயுஷ்மான் பாரத் என்பது தகுதியுள்ள பயனாளிகளுக்கு மருத்துவ காப்பீட்டு பாதுகாப்பை வழங்கும் அரசு சுகாதார திட்டமாகும்.",
            Telugu: "ఆయుష్మాన్ భారత్ అనేది అర్హత కలిగిన లబ్ధిదారులకు ఆరోగ్య కవరేజీ అందించే ప్రభుత్వ ఆరోగ్య కార్యక్రమం.",
            Hindi: "आयुष्मान भारत पात्र लाभार्थियों को स्वास्थ्य कवरेज प्रदान करने वाला सरकारी स्वास्थ्य कार्यक्रम है।",
            Kannada: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಅರ್ಹ ಫಲಾನುಭವಿಗಳಿಗೆ ಆರೋಗ್ಯ ರಕ್ಷಣೆಯನ್ನು ಒದಗಿಸುವ ಸರ್ಕಾರಿ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮವಾಗಿದೆ."
        },

        eligibility: {
            English: "Eligibility depends on the applicable government beneficiary criteria.",
            Tamil: "தகுதி பொருந்தக்கூடிய அரசு பயனாளி விதிமுறைகளைப் பொறுத்தது.",
            Telugu: "అర్హత వర్తించే ప్రభుత్వ లబ్ధిదారుల ప్రమాణాలపై ఆధారపడి ఉంటుంది.",
            Hindi: "पात्रता लागू सरकारी लाभार्थी मानदंडों पर निर्भर करती है।",
            Kannada: "ಅರ್ಹತೆಯು ಅನ್ವಯಿಸುವ ಸರ್ಕಾರಿ ಫಲಾನುಭವಿ ಮಾನದಂಡಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ."
        },

        documents: {
            English: "Beneficiary identification and other required documents may be needed.",
            Tamil: "பயனாளி அடையாளம் மற்றும் பிற தேவையான ஆவணங்கள் தேவைப்படலாம்.",
            Telugu: "లబ్ధిదారుల గుర్తింపు మరియు ఇతర అవసరమైన పత్రాలు అవసరం కావచ్చు.",
            Hindi: "लाभार्थी की पहचान और अन्य आवश्यक दस्तावेज़ आवश्यक हो सकते हैं।",
            Kannada: "ಫಲಾನುಭವಿಯ ಗುರುತು ಮತ್ತು ಇತರ ಅಗತ್ಯ ದಾಖಲೆಗಳು ಬೇಕಾಗಬಹುದು."
        },

        apply: {
            English: "Eligible beneficiaries can access the programme through authorised health facilities.",
            Tamil: "தகுதியுள்ள பயனாளிகள் அங்கீகரிக்கப்பட்ட சுகாதார மையங்கள் மூலம் இந்த திட்டத்தைப் பெறலாம்.",
            Telugu: "అర్హత కలిగిన లబ్ధిదారులు అధికారిక ఆరోగ్య కేంద్రాల ద్వారా ఈ కార్యక్రమాన్ని పొందవచ్చు.",
            Hindi: "पात्र लाभार्थी अधिकृत स्वास्थ्य केंद्रों के माध्यम से इस कार्यक्रम का लाभ उठा सकते हैं।",
            Kannada: "ಅರ್ಹ ಫಲಾನುಭವಿಗಳು ಅಧಿಕೃತ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳ ಮೂಲಕ ಈ ಕಾರ್ಯಕ್ರಮದ ಪ್ರಯೋಜನ ಪಡೆಯಬಹುದು."
        }
    }
};


// ===============================
// LANGUAGE HEADINGS
// ===============================

const headings = {

    information: {
        English: "Scheme Information",
        Tamil: "திட்ட தகவல்",
        Telugu: "పథకం సమాచారం",
        Hindi: "योजना की जानकारी",
        Kannada: "ಯೋಜನೆಯ ಮಾಹಿತಿ"
    },

    eligibility: {
        English: "Eligibility",
        Tamil: "தகுதி",
        Telugu: "అర్హత",
        Hindi: "पात्रता",
        Kannada: "ಅರ್ಹತೆ"
    },

    documents: {
        English: "Required Documents",
        Tamil: "தேவையான ஆவணங்கள்",
        Telugu: "అవసరమైన పత్రాలు",
        Hindi: "आवश्यक दस्तावेज़",
        Kannada: "ಅಗತ್ಯ ದಾಖಲೆಗಳು"
    },

    apply: {
        English: "How to Apply",
        Tamil: "எப்படி விண்ணப்பிப்பது",
        Telugu: "ఎలా దరఖాస్తు చేయాలి",
        Hindi: "आवेदन कैसे करें",
        Kannada: "ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನ"
    }
};


// ===============================
// LANGUAGE CHANGE
// ===============================

const languageSelect = document.getElementById("language");

languageSelect.addEventListener("change", function () {

    selectedLanguage = languageSelect.value;

    // Stop current speech when language changes
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    showWelcomeMessage();
});


// ===============================
// WELCOME MESSAGE
// ===============================

function showWelcomeMessage() {

    const response = document.getElementById("aiResponse");

    if (selectedLanguage === "Tamil") {

        response.innerHTML =
            "வணக்கம்! 👋<br><br>" +
            "நான் Sakhi AI. அரசு திட்டங்கள், தகுதி, " +
            "தேவையான ஆவணங்கள் மற்றும் விண்ணப்பிக்கும் முறையைப் பற்றி " +
            "உங்களுக்கு உதவ முடியும்.";

    }

    else if (selectedLanguage === "Telugu") {

        response.innerHTML =
            "నమస్కారం! 👋<br><br>" +
            "నేను Sakhi AI. ప్రభుత్వ పథకాలు, అర్హత, " +
            "అవసరమైన పత్రాలు మరియు దరఖాస్తు విధానం గురించి " +
            "మీకు సహాయం చేయగలను.";

    }

    else if (selectedLanguage === "Hindi") {

        response.innerHTML =
            "नमस्ते! 👋<br><br>" +
            "मैं Sakhi AI हूँ। मैं आपको सरकारी योजनाओं, पात्रता, " +
            "आवश्यक दस्तावेज़ और आवेदन प्रक्रिया के बारे में " +
            "जानकारी देने में मदद कर सकता हूँ।";

    }

    else if (selectedLanguage === "Kannada") {

        response.innerHTML =
            "ನಮಸ್ಕಾರ! 👋<br><br>" +
            "ನಾನು Sakhi AI. ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಅರ್ಹತೆ, " +
            "ಅಗತ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆಯ ಬಗ್ಗೆ " +
            "ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಹುದು.";

    }

    else {

        response.innerHTML =
            "Hello! 👋<br><br>" +
            "I am Sakhi AI. I can help you understand " +
            "government schemes, eligibility, required " +
            "documents and application steps.";
    }
}


// ===============================
// ASK AI
// ===============================

function askAI() {

    const schemeSelect =
        document.getElementById("schemeSelect");

    const questionBox =
        document.getElementById("userQuestion");

    const response =
        document.getElementById("aiResponse");

    const selectedScheme =
        schemes[schemeSelect.value];

    const question =
        questionBox.value.toLowerCase().trim();


    // Check question
    if (question === "") {

        response.innerHTML =
            "⚠️ Please enter a question first.";

        // 🔊 Speak error message
        speakResponse("Please enter a question first.");

        return;
    }


    // Check scheme
    if (!selectedScheme) {

        response.innerHTML =
            "⚠️ Please select a government scheme.";

        // 🔊 Speak error message
        speakResponse("Please select a government scheme.");

        return;
    }


    // Default answer
    let answerType = "information";


    // English question detection
    if (
        question.includes("eligible") ||
        question.includes("eligibility")
    ) {

        answerType = "eligibility";

    }

    else if (
        question.includes("document") ||
        question.includes("documents")
    ) {

        answerType = "documents";

    }

    else if (
        question.includes("apply") ||
        question.includes("application")
    ) {

        answerType = "apply";
    }


    // Get language-specific information
    const schemeName =
        selectedScheme.name[selectedLanguage];

    const answer =
        selectedScheme[answerType][selectedLanguage];

    const heading =
        headings[answerType][selectedLanguage];


    // Display answer
    response.innerHTML =
        "<strong>📋 " +
        schemeName +
        "</strong><br><br>" +

        "<strong>🔹 " +
        heading +
        "</strong><br><br>" +

        answer;


    // ===============================
    // 🔊 AI SPEAKS THE ANSWER
    // ===============================

    speakResponse(answer);
}


// ===============================
// QUICK HELP BUTTONS
// ===============================

function askQuestion(question) {

    const questionBox =
        document.getElementById("userQuestion");

    questionBox.value = question;

    askAI();
}


// ===============================
// VOICE INPUT
// ===============================

const voiceButton =
    document.getElementById("voiceButton");

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition =
        new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;


    voiceButton.addEventListener("click", function () {

        // Use selected language
        if (selectedLanguage === "Tamil") {

            recognition.lang = "ta-IN";
        }

        else if (selectedLanguage === "Telugu") {

            recognition.lang = "te-IN";
        }

        else if (selectedLanguage === "Hindi") {

            recognition.lang = "hi-IN";
        }

        else if (selectedLanguage === "Kannada") {

            recognition.lang = "kn-IN";
        }

        else {

            recognition.lang = "en-IN";
        }


        recognition.start();

        voiceButton.innerHTML =
            "🎤 Listening...";
    });


    recognition.onresult = function (event) {

        const spokenText =
            event.results[0][0].transcript;


        document.getElementById("userQuestion").value =
            spokenText;


        voiceButton.innerHTML =
            "🎤 Speak";


        // Automatically ask AI
        askAI();
    };


    recognition.onerror = function () {

        voiceButton.innerHTML =
            "🎤 Speak";

        alert(
            "Sorry, I could not hear you. Please try again."
        );
    };


    recognition.onend = function () {

        voiceButton.innerHTML =
            "🎤 Speak";
    };

}

else {

    voiceButton.addEventListener("click", function () {

        alert(
            "Voice input is not supported in this browser. Please use Google Chrome."
        );

    });
}


// ===============================
// 🔊 SAKHI AI - TEXT TO SPEECH
// ===============================

function speakResponse(text) {

    // Check whether browser supports speech
    if (!("speechSynthesis" in window)) {

        alert(
            "Voice output is not supported in this browser."
        );

        return;
    }


    // Stop previous speech
    window.speechSynthesis.cancel();


    // Create speech
    const speech =
        new SpeechSynthesisUtterance(text);


    // ===============================
    // SELECT SPEECH LANGUAGE
    // ===============================

    if (selectedLanguage === "Tamil") {

        speech.lang = "ta-IN";
    }

    else if (selectedLanguage === "Telugu") {

        speech.lang = "te-IN";
    }

    else if (selectedLanguage === "Hindi") {

        speech.lang = "hi-IN";
    }

    else if (selectedLanguage === "Kannada") {

        speech.lang = "kn-IN";
    }

    else {

        speech.lang = "en-IN";
    }


    // ===============================
    // VOICE SETTINGS
    // ===============================

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;


    // ===============================
    // SPEAK
    // ===============================

    window.speechSynthesis.speak(speech);
}
```
