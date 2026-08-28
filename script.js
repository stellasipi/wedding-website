// Translations
const translations = {
    hu: {
        nav_home: 'Kezdőlap',
        date: '2027 · 07 · 03',
        invite_text: 'Szeretettel várunk az esküvőnkre, ahol veletek szeretnénk hajnalig ünnepelni és bulizni. Legyen ez most a ti estétek is!',
        schedule_title: 'Program',
        ceremony_title: 'Templomi Szertartás',
        civil_title: 'Polgári Szertartás',
        civil_desc: 'Polyák Borbirtok',
        photos_title: 'Fotózkodás és Ajándékozás',
        photos_desc: 'Közös fotók és ajándékozás',
        dinner_title: 'Vacsora',
        cake_title: 'Torta és Hajnalig Tartó Buli',
        cake_desc: 'Tortavágás és tánc hajnalig',
        info_title: 'Információk',
        venue_title: 'Helyszínek',
        church_label: 'Templom:',
        reception_label: 'Polgári szertartás és lakodalom:',
        map_link: 'Megnyitás térképen ↗',
        directions_title: 'Megközelítés',
        directions_desc: 'A helyszínt az M5-ös autópálya új kunszállási lehajtóján a legegyszerűbb megközelíteni.',
        accommodation_title: 'Szállás',
        accommodation_desc: 'Éjfél után pedig biztosítunk ingyenes sofőrszolgáltatást (nem taxi) a helyszín és Kecskemét között, ezért érdemes Kecskeméten szállást foglalni.',
        registry_title: 'Nászajándék',
        registry_desc: 'Közös jövőnkhöz a borítékban érkező ajándékoknak örülnénk a legjobban.',
        rsvp_title: 'Visszajelzés',
        form_name: 'Teljes név *',
        form_additional: 'Kiket regisztrálsz magadon kívül (teljes nevek)',
        additional_placeholder: 'pl. Kiss Péter, Nagy Anna',
        form_email: 'E-mail (az alábbi visszajelzésről másolatot kapsz)',
        form_attending: 'Részt tudsz/tudok venni? *',
        attending_yes: 'Igen',
        attending_no: 'Sajnos nem',
        form_allergies: 'Ételallergiák *',
        allergies_none: 'Nincs',
        allergies_have: 'Van',
        allergies_placeholder: 'Kérjük, írd le az allergiákat',
        form_driver: 'Igénybe vennéd a sofőrszolgáltatást (nem taxi) a helyszín és Kecskemét között? *',
        driver_yes: 'Igen',
        driver_no: 'Nem',
        driver_maybe: 'Még nem tudom',
        form_message: 'Egyéb',
        message_placeholder: 'További megjegyzések vagy kérdések',
        submit_btn: 'Visszajelzés Küldése',
        submitting: 'Küldés...',
        footer: 'Alig várjuk, hogy együtt ünnepelhessünk veletek!',
        success_message: 'Köszönjük a visszajelzésed!',
        success_message_email: 'Köszönjük a visszajelzésed! Egy másolatot elküldtünk az e-mail címedre is.',
        error_message: 'Hiba történt a visszajelzés küldése közben. Kérjük, próbáld újra, vagy lépj kapcsolatba velünk közvetlenül.',
        allergy_required: 'Kérjük, add meg az allergiákat!',
        error_name_required: 'Kérjük, add meg a teljes neved.',
        error_attending_required: 'Kérjük, válaszd ki, hogy részt tudsz-e venni.',
        error_allergies_required: 'Kérjük, válaszd ki, hogy van-e ételallergiád.',
        error_driver_required: 'Kérjük, válaszd ki a sofőrszolgáltatás opciót.',
        error_email_invalid: 'Kérjük, adj meg egy érvényes e-mail címet.'
    },
    en: {
        nav_home: 'Home',
        date: '2027 · 07 · 03',
        invite_text: "Come celebrate with us and dance the night away. We're hoping this will be a proper night out for you too!",
        schedule_title: 'Schedule',
        ceremony_title: 'Church Ceremony',
        civil_title: 'Civil Ceremony',
        civil_desc: 'Polyák Winery, Kunszállás',
        photos_title: 'Photos & Gifts',
        photos_desc: 'Group photos and gifts with the newlyweds',
        dinner_title: 'Dinner',
        cake_title: 'Cake & Party',
        cake_desc: 'Cake cutting and dancing until dawn',
        info_title: 'Information',
        venue_title: 'Venues',
        church_label: 'Church:',
        reception_label: 'Civil ceremony and party:',
        map_link: 'Open in Maps ↗',
        directions_title: 'Getting there',
        directions_desc: 'The venue is easiest to reach via the new Kunszállás exit on the M5 motorway.',
        accommodation_title: 'Accommodation',
        accommodation_desc: 'After midnight, we provide a free driver service (not a taxi) between the venue and Kecskemét, so we recommend booking accommodation in Kecskemét.',
        registry_title: 'Gifts',
        registry_desc: 'For our future together, we would be most grateful for a gift in an envelope.',
        rsvp_title: 'RSVP',
        form_name: 'Full name *',
        form_additional: 'Who else are you registering (full names)',
        additional_placeholder: 'e.g. John Smith, Jane Doe',
        form_email: "E-mail (you'll receive a copy of this RSVP)",
        form_attending: 'Will you be able to attend? *',
        attending_yes: 'Yes',
        attending_no: 'Unfortunately not',
        form_allergies: 'Food allergies *',
        allergies_none: 'I don\'t have',
        allergies_have: 'I have',
        allergies_placeholder: 'Please list any allergies',
        form_driver: 'Would you like to use the driver service (not a taxi) between the venue and Kecskemét? *',
        driver_yes: 'Yes',
        driver_no: 'No',
        driver_maybe: 'Not sure yet',
        form_message: 'Other',
        message_placeholder: 'Additional comments or questions',
        submit_btn: 'Submit RSVP',
        submitting: 'Submitting...',
        footer: 'We can\'t wait to celebrate with you!',
        success_message: 'Thank you for your RSVP!',
        success_message_email: 'Thank you for your RSVP! We\'ve sent a copy to your email address.',
        error_message: 'There was an error submitting your RSVP. Please try again or contact us directly.',
        allergy_required: 'Please provide allergy details!',
        error_name_required: 'Please enter your full name.',
        error_attending_required: 'Please select whether you can attend.',
        error_allergies_required: 'Please select whether you have any food allergies.',
        error_driver_required: 'Please select a driver service option.',
        error_email_invalid: 'Please enter a valid email address.'
    }
};

let currentLang = 'hu';

// Language switching
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all translated elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update thank-you message if it's currently showing, using the last-known email state
    const thankYouPanel = document.getElementById('thankYouPanel');
    if (thankYouPanel && thankYouPanel.classList.contains('show')) {
        const key = thankYouPanel.dataset.emailProvided === 'true' ? 'success_message_email' : 'success_message';
        document.getElementById('thankYouMessage').textContent = translations[lang][key];
    }

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'hu';
    setLanguage(savedLang);

    // Language button listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.getAttribute('data-lang'));
        });
    });
});

// Field-level error helpers
function showFieldError(fieldId, message) {
    const el = document.getElementById(fieldId);
    if (el) {
        el.textContent = message;
        el.classList.add('show');
    }
}

function clearFieldError(fieldId) {
    const el = document.getElementById(fieldId);
    if (el) {
        el.textContent = '';
        el.classList.remove('show');
    }
}

function clearAllFieldErrors() {
    document.querySelectorAll('.field-error').forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
    document.querySelectorAll('.input-error').forEach(el => {
        el.classList.remove('input-error');
    });
}

// Attending radio button logic - show/hide conditional fields
const attendingRadios = document.querySelectorAll('input[name="attending"]');
const conditionalFields = document.getElementById('conditional-fields');

attendingRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        clearFieldError('error-attending');
        this.closest('.radio-group').classList.remove('input-error');
        if (this.value === 'Sajnos nem') {
            conditionalFields.style.display = 'none';
            // Clear selections in hidden fields so they don't get submitted
            document.querySelectorAll('input[name="allergy_status"]').forEach(r => r.checked = false);
            document.querySelectorAll('input[name="driver_service"]').forEach(r => r.checked = false);
            allergiesTextInput.value = '';
            allergyTextboxContainer.classList.remove('show');
            allergiesTextInput.removeAttribute('required');
            clearFieldError('error-allergies');
            clearFieldError('error-driver');
        } else {
            conditionalFields.style.display = '';
        }
    });
});

// Allergy radio button logic
const allergyRadios = document.querySelectorAll('input[name="allergy_status"]');
const allergyTextboxContainer = document.getElementById('allergy-textbox-container');
const allergiesTextInput = document.getElementById('allergies_text');

allergyRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        clearFieldError('error-allergies');
        this.closest('.radio-group').classList.remove('input-error');
        if (this.value === 'Van') {
            allergyTextboxContainer.classList.add('show');
            allergiesTextInput.setAttribute('required', 'required');
        } else {
            allergyTextboxContainer.classList.remove('show');
            allergiesTextInput.removeAttribute('required');
            allergiesTextInput.value = '';
            allergiesTextInput.classList.remove('input-error');
        }
    });
});

allergiesTextInput.addEventListener('input', function() {
    if (this.value.trim()) {
        clearFieldError('error-allergies');
        this.classList.remove('input-error');
    }
});

document.querySelectorAll('input[name="driver_service"]').forEach(radio => {
    radio.addEventListener('change', function() {
        clearFieldError('error-driver');
        this.closest('.radio-group').classList.remove('input-error');
    });
});

const nameInput = document.getElementById('name');
nameInput.addEventListener('input', function() {
    if (this.value.trim()) {
        clearFieldError('error-name');
        this.classList.remove('input-error');
    }
});

const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
    clearFieldError('error-email');
    this.classList.remove('input-error');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// RSVP Form Submission
const form = document.getElementById('rsvpForm');
const formMessage = document.getElementById('formMessage');

// Full form validation - shows inline errors under each missing mandatory field
function validateForm() {
    clearAllFieldErrors();
    let isValid = true;
    let firstInvalidEl = null;

    // Name
    if (!nameInput.value.trim()) {
        showFieldError('error-name', translations[currentLang].error_name_required);
        nameInput.classList.add('input-error');
        isValid = false;
        firstInvalidEl = firstInvalidEl || nameInput;
    }

    // Email (optional, but must be a valid format if filled in)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() && !emailPattern.test(emailInput.value.trim())) {
        showFieldError('error-email', translations[currentLang].error_email_invalid);
        emailInput.classList.add('input-error');
        isValid = false;
        firstInvalidEl = firstInvalidEl || emailInput;
    }

    // Attending
    const attendingChecked = document.querySelector('input[name="attending"]:checked');
    const attendingGroup = document.querySelector('input[name="attending"]').closest('.radio-group');
    if (!attendingChecked) {
        showFieldError('error-attending', translations[currentLang].error_attending_required);
        attendingGroup.classList.add('input-error');
        isValid = false;
        firstInvalidEl = firstInvalidEl || attendingGroup;
    }

    const isAttending = attendingChecked && attendingChecked.value === 'Igen';

    if (isAttending) {
        // Allergies
        const allergyChecked = document.querySelector('input[name="allergy_status"]:checked');
        const allergyGroup = document.querySelector('input[name="allergy_status"]').closest('.radio-group');
        if (!allergyChecked) {
            showFieldError('error-allergies', translations[currentLang].error_allergies_required);
            allergyGroup.classList.add('input-error');
            isValid = false;
            firstInvalidEl = firstInvalidEl || allergyGroup;
        } else if (allergyChecked.value === 'Van' && !allergiesTextInput.value.trim()) {
            showFieldError('error-allergies', translations[currentLang].allergy_required);
            allergiesTextInput.classList.add('input-error');
            isValid = false;
            firstInvalidEl = firstInvalidEl || allergiesTextInput;
        }

        // Driver service
        const driverChecked = document.querySelector('input[name="driver_service"]:checked');
        const driverGroup = document.querySelector('input[name="driver_service"]').closest('.radio-group');
        if (!driverChecked) {
            showFieldError('error-driver', translations[currentLang].error_driver_required);
            driverGroup.classList.add('input-error');
            isValid = false;
            firstInvalidEl = firstInvalidEl || driverGroup;
        }
    }

    if (firstInvalidEl) {
        firstInvalidEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return isValid;
}

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const attendingValue = document.querySelector('input[name="attending"]:checked');
    const isAttending = attendingValue.value === 'Igen';
    const allergyStatus = isAttending ? document.querySelector('input[name="allergy_status"]:checked') : null;
    
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = translations[currentLang].submitting;
    
    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Handle allergies field
    if (isAttending) {
        if (allergyStatus.value === 'Nincs') {
            data.allergies = currentLang === 'hu' ? 'Nincs' : 'None';
        } else {
            data.allergies = allergiesTextInput.value;
        }
    } else {
        data.allergies = '-';
        data.driver_service = '-';
    }
    delete data.allergy_status;
    delete data.allergies_text;
    
    // Add timestamp and language
    data.timestamp = new Date().toISOString();
    data.language = currentLang;
    
    try {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx6tY6IG9paBQQve8z96JgcMBZ8wrRWMFNna6bkkiTjZAjS8T0lYBKJMC5LSvgKuWH3/exec';
        
        const response = await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        // Hide the form and show the thank-you panel instead
        const thankYouMessage = data.email 
            ? translations[currentLang].success_message_email 
            : translations[currentLang].success_message;
        document.getElementById('thankYouMessage').textContent = thankYouMessage;
        const thankYouPanel = document.getElementById('thankYouPanel');
        thankYouPanel.dataset.emailProvided = data.email ? 'true' : 'false';
        form.style.display = 'none';
        thankYouPanel.classList.add('show');
        
    } catch (error) {
        console.error('Error:', error);
        formMessage.textContent = translations[currentLang].error_message;
        formMessage.className = 'form-message error';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang].submit_btn;
    }
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Scroll-spy: highlight the current section in the site navigation
const spySections = ['home', 'schedule', 'information', 'rsvp'];
const siteNavLinks = document.querySelectorAll('.site-nav-link');

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeId = entry.target.id;
            siteNavLinks.forEach(link => {
                const isActive = link.getAttribute('href') === '#' + activeId;
                link.classList.toggle('active', isActive);
                if (isActive) {
                    // On mobile, the nav links can scroll horizontally - keep the active one in view
                    link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                }
            });
        }
    });
}, {
    root: null,
    rootMargin: '-45% 0px -50% 0px',
    threshold: 0
});

spySections.forEach(id => {
    const el = document.getElementById(id);
    if (el) spyObserver.observe(el);
});
