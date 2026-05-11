# 🦷 Dental Clinic Website

React + Vite + Tailwind + HeroUI + Firebase

---

## 🚀 تشغيل المشروع

```bash
npm install
npm run dev
```

---

## ✏️ التعديلات

كل البيانات في ملف واحد: `src/data/content.js`
- اسم الدكتور (عربي + إنجليزي)
- رقم الواتساب
- العنوان والمواعيد
- الخدمات

---

## 🔥 إعداد Firebase

1. روح https://console.firebase.google.com
2. اعمل مشروع جديد
3. فعّل **Firestore Database**
4. افتح `src/firebase/config.js` وحط بياناتك

### Firestore Rules (مهم!)
في Firebase Console → Firestore → Rules، حط القواعد دي:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{doc} {
      allow read, write: if true;
    }
  }
}
```

---

## 🖼️ الصور

حط صورك في `public/images/`:
```
public/
  images/
    doctor-hero.png    ← صورة الدكتور في الهيرو
    doctor-about.jpg   ← صورة الدكتور في About
```

---

## 🌐 النشر على Vercel

```bash
npm run build
npx vercel
```
