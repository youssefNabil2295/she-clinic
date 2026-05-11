// src/components/BookingForm.jsx
import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { DOCTOR, SERVICES, TIME_SLOTS, UI } from '../data/content'

const INIT = { name: '', phone: '', category: '', service: '', date: '', time: '', notes: '' }

const CATEGORIES = {
  laser: { en: '🔬 Laser Treatments', ar: '🔬 علاجات الليزر' },
  skin:  { en: '💆‍♀️ Skin & Dermatology', ar: '💆‍♀️ البشرة والجلدية' },
  surgery: { en: '✨ Plastic Surgery', ar: '✨ جراحات التجميل' },
  injectables: { en: '💉 Injectables', ar: '💉 الحقن التجميلية' },
}

export default function BookingForm() {
  const { lang, isAr } = useLang()
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  function t(key) { return UI[key]?.[lang] || '' }

  const filteredServices = form.category ? SERVICES.filter(s => s.category === form.category) : []

  function validate() {
    const e = {}  
    if (!form.name.trim())     e.name     = t('required')
    if (!form.phone.trim())    e.phone    = t('required')
    if (!form.category)        e.category = t('required')
    if (!form.service)         e.service  = t('required')
    if (!form.date)            e.date     = t('required')
    if (!form.time)            e.time     = t('required')
    return e
  }

  async function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setLoading(true)

    const categoryName = CATEGORIES[form.category]?.[lang] || form.category
    const serviceObj = SERVICES.find(s => s.id === parseInt(form.service))
    const serviceName = serviceObj ? serviceObj.name[lang] : form.service

    const msg = [
      `🏥 *طلب حجز جديد - شي كلينك*`,
      `─────────────────`,
      `👤 الاسم: ${form.name}`,
      `📞 الهاتف: ${form.phone}`,
      `📂 القسم: ${categoryName}`,
      `💉 الخدمة: ${serviceName}`,
      `📅 التاريخ: ${form.date}`,
      `🕐 الوقت: ${form.time}`,
      form.notes ? `📝 ملاحظات: ${form.notes}` : '',
      `─────────────────`,
      `🆕 طلب جديد يرجى التواصل مع العميل لتأكيد الحجز`,
    ].filter(Boolean).join('\n')

    // ✅ الطريقة المضمونة لفتح واتساب (تعمل على PC وموبايل)
    const phone = DOCTOR.phone
    const text = encodeURIComponent(msg)
    
    // حاول تفتح web.whatsapp.com أولاً
    const url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}`
    
    // افتح في تبويب جديد
    const newWindow = window.open(url, '_blank')
    
    // لو منعته الـ Popup blocker، اعرض رسالة للمستخدم
    if (!newWindow) {
      alert(isAr ? 'الرجاء السماح للنوافذ المنبثقة أو اضغط على الرابط: ' + url : 'Please allow popups or click the link: ' + url)
    }
    
    setLoading(false)
    setSuccess(true)
    setForm(INIT)
    setErrors({})

    // رسالة تأكيد للعميل
    setTimeout(() => {
      const clientMsg = [
        `✨ *شكراً لتواصلك مع شي كلينك* ✨`,
        `─────────────────`,
        `عزيزتي ${form.name}،`,
        ``,
        `تم استلام طلب حجزك بنجاح ✅`,
        ``,
        `📋 التفاصيل:`,
        `📅 التاريخ: ${form.date}`,
        `🕐 الوقت: ${form.time}`,
        `💉 الخدمة: ${serviceName}`,
        ``,
        `📞 سيتم التواصل معك خلال ٢٤ ساعة لتأكيد الحجز.`,
        ``,
        `شكراً لثقتك بنا 💕`,
      ].join('\n')
      
      const clientUrl = `https://web.whatsapp.com/send?phone=${form.phone}&text=${encodeURIComponent(clientMsg)}`
      window.open(clientUrl, '_blank')
    }, 1000)
  }

  function handleChange(field, val) {
    setForm(p => ({ ...p, [field]: val }))
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }))
  }

  function handleCategoryChange(category) {
    setForm(p => ({ ...p, category, service: '' }))
    if (errors.category) setErrors(p => ({ ...p, category: '' }))
  }

  if (success) return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center text-3xl">✓</div>
      <h3 className="font-bold text-clinic-dark text-xl">{isAr ? 'تم استلام طلبك!' : 'Request Received!'}</h3>
      <p className="text-clinic-gray text-sm max-w-md">
        {isAr 
          ? 'سيتم التواصل معك عبر واتساب خلال ٢٤ ساعة لتأكيد الحجز 💕'
          : 'We will contact you via WhatsApp within 24 hours to confirm your appointment 💕'}
      </p>
      <button onClick={() => setSuccess(false)}
        className="mt-2 border border-clinic-gold text-clinic-gold font-semibold text-sm px-6 py-2 rounded-lg hover:bg-clinic-gold hover:text-white transition-all">
        {isAr ? 'حجز جديد' : 'New Booking'}
      </button>
    </div>
  )

  return (
    <div className={`grid md:grid-cols-2 gap-4 ${isAr ? 'text-right' : 'text-left'}`}>
      <Field label={isAr ? 'الاسم' : 'Name'} error={errors.name} required>
        <input type="text" placeholder={t('namePlaceholder')} value={form.name}
          onChange={e => handleChange('name', e.target.value)} 
          className={inputCls(errors.name)} />
      </Field>

      <Field label={isAr ? 'رقم الهاتف' : 'Phone'} error={errors.phone} required>
        <input type="tel" placeholder={t('phonePlaceholder')} value={form.phone}
          onChange={e => handleChange('phone', e.target.value)} 
          className={inputCls(errors.phone)} />
      </Field>

      <Field label={isAr ? 'القسم' : 'Department'} error={errors.category} required>
        <select value={form.category} onChange={e => handleCategoryChange(e.target.value)} 
          className={inputCls(errors.category)}>
          <option value="">{isAr ? 'اختر القسم' : 'Select Department'}</option>
          {Object.entries(CATEGORIES).map(([key, val]) => (
            <option key={key} value={key}>{val[lang]}</option>
          ))}
        </select>
      </Field>

      <Field label={isAr ? 'الخدمة' : 'Service'} error={errors.service} required>
        <select value={form.service} onChange={e => handleChange('service', e.target.value)} 
          className={inputCls(errors.service)} disabled={!form.category}>
          <option value="">{!form.category ? (isAr ? 'اختر القسم أولاً' : 'Select department first') : t('selectService')}</option>
          {filteredServices.map(s => (
            <option key={s.id} value={s.id}>{s.icon} {s.name[lang]}</option>
          ))}
        </select>
      </Field>

      <Field label={isAr ? 'التاريخ' : 'Date'} error={errors.date} required>
        <input type="date" min={new Date().toISOString().split('T')[0]} value={form.date}
          onChange={e => handleChange('date', e.target.value)} 
          className={inputCls(errors.date)} />
      </Field>

      <Field label={isAr ? 'الوقت' : 'Time'} error={errors.time} required className="md:col-span-2">
        <select value={form.time} onChange={e => handleChange('time', e.target.value)} 
          className={inputCls(errors.time)}>
          <option value="">{t('selectTime')}</option>
          {TIME_SLOTS.map(slot => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </Field>

      <Field label={isAr ? 'ملاحظات (اختياري)' : 'Notes (optional)'} className="md:col-span-2">
        <textarea rows={2} placeholder={isAr ? 'أي تفاصيل إضافية...' : 'Any additional details...'}
          value={form.notes} onChange={e => handleChange('notes', e.target.value)}
          className={inputCls() + ' resize-none'} />
      </Field>

      <div className="md:col-span-2">
        <button onClick={handleSubmit} disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-clinic-gold text-white font-bold py-3.5 rounded-lg shadow hover:bg-clinic-gold-dark hover:-translate-y-0.5 transition-all disabled:opacity-60">
          {loading ? (isAr ? 'جاري الإرسال...' : 'Sending...') : (
            <>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {isAr ? 'أرسل طلب حجز' : 'Send Booking Request'}
            </>
          )}
        </button>
      </div>
      
      <p className="text-center text-clinic-gray/60 text-xs mt-2 md:col-span-2">
        {isAr 
          ? '📌 سيتم التواصل معك لتأكيد الحجز خلال ٢٤ ساعة'
          : '📌 You will be contacted within 24 hours to confirm your booking'}
      </p>
    </div>
  )
}

function inputCls(error) {
  return [
    'w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-clinic-dark',
    'focus:outline-none focus:border-clinic-gold focus:ring-1 focus:ring-clinic-gold transition-colors',
    error ? 'border-red-400' : 'border-gray-200 hover:border-clinic-gold/60',
  ].join(' ')
}

function Field({ label, error, required, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-clinic-gray text-xs font-medium">
        {label} {required && <span className="text-clinic-gold">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs">⚠ {error}</p>}
    </div>
  )
}