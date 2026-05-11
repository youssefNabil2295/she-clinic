// src/pages/Admin.jsx
import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { useNavigate } from 'react-router-dom'

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400',
]

const ADMIN_CREDENTIALS = {
  username: 'sheclinic',
  password: 'sheadmin2025'
}

export default function Admin() {
  const { isAr } = useLang()
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [images, setImages] = useState([])
  const [newImageUrl, setNewImageUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (authenticated) {
      const stored = localStorage.getItem('sheclinic_gallery')
      if (stored) {
        setImages(JSON.parse(stored))
      } else {
        setImages(DEFAULT_IMAGES)
        localStorage.setItem('sheclinic_gallery', JSON.stringify(DEFAULT_IMAGES))
      }
    }
  }, [authenticated])

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setAuthenticated(true)
      setLoginError('')
    } else {
      setLoginError(isAr ? 'اسم المستخدم أو كلمة السر غير صحيحة' : 'Invalid username or password')
    }
  }

  const saveImages = (newImages) => {
    setImages(newImages)
    localStorage.setItem('sheclinic_gallery', JSON.stringify(newImages))
  }

  const addImageByUrl = () => {
    if (newImageUrl.trim()) {
      saveImages([...images, newImageUrl.trim()])
      setNewImageUrl('')
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      alert(isAr ? 'الرجاء اختيار ملف صورة صالح' : 'Please select a valid image file')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      alert(isAr ? 'حجم الصورة كبير جداً (الحد الأقصى 2 ميجابايت)' : 'Image size too large (max 2MB)')
      return
    }
    setUploading(true)
    const reader = new FileReader()
    reader.onloadend = () => {
      saveImages([...images, reader.result])
      setUploading(false)
    }
    reader.onerror = () => {
      alert(isAr ? 'حدث خطأ أثناء قراءة الصورة' : 'Error reading image')
      setUploading(false)
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index)
    saveImages(updated)
  }

  const resetToDefault = () => {
    saveImages(DEFAULT_IMAGES)
  }

  const logout = () => {
    setAuthenticated(false)
    setUsername('')
    setPassword('')
    navigate('/')  // يروح للصفحة الرئيسية
  }

  // شاشة تسجيل الدخول
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <h2 className="text-center text-3xl font-bold text-navy">
              {isAr ? 'تسجيل الدخول إلى لوحة التحكم' : 'Admin Login'}
            </h2>
            <p className="mt-2 text-center text-sm text-navy/60">
              {isAr ? 'أدخل اسم المستخدم وكلمة السر' : 'Enter your username and password'}
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-navy/70">
                  {isAr ? 'اسم المستخدم' : 'Username'}
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-navy/70">
                  {isAr ? 'كلمة السر' : 'Password'}
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>
            </div>

            {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

            <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold-dark">
              {isAr ? 'دخول' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // لوحة التحكم بعد تسجيل الدخول
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* زر العودة للرئيسية في الأعلى */}
        <div className="mb-4 flex justify-between items-center">
          <button
            onClick={logout}
            className="flex items-center gap-2 text-clinic-gold hover:text-clinic-gold-dark transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {isAr ? 'العودة إلى الموقع' : 'Back to Website'}
          </button>
          
          <button
            onClick={logout}
            className="text-sm text-red-500 hover:text-red-700"
          >
            {isAr ? 'تسجيل خروج' : 'Logout'}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-navy mb-2">
            {isAr ? 'لوحة تحكم المعرض' : 'Gallery Admin Panel'}
          </h1>
          <p className="text-navy/60 mb-6">
            {isAr ? 'إضافة أو حذف صور المعرض' : 'Add or remove gallery images'}
          </p>

          {/* رفع الصور من الجهاز */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-dashed border-gold/50">
            <label className="block text-sm font-medium text-navy/80 mb-2">
              {isAr ? '📁 رفع صورة من جهازك' : '📁 Upload image from your device'}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={uploading}
                className="flex-1 text-sm text-navy/70 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gold/20 file:text-navy hover:file:bg-gold/30"
              />
              {uploading && <span className="text-gold text-sm">{isAr ? 'جاري الرفع...' : 'Uploading...'}</span>}
            </div>
            <p className="text-xs text-navy/40 mt-2">
              {isAr ? 'مسموح بالصور بصيغة JPG, PNG, GIF (حد أقصى 2 ميجابايت)' : 'Allowed formats: JPG, PNG, GIF (max 2MB)'}
            </p>
          </div>

          {/* إضافة صورة عبر الرابط */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder={isAr ? 'أو أدخل رابط الصورة (URL)' : 'Or enter image URL'}
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
            />
            <button
              onClick={addImageByUrl}
              className="bg-gold text-navy font-semibold px-6 py-2 rounded-lg hover:bg-gold-dark transition"
            >
              {isAr ? 'إضافة بالرابط' : 'Add by URL'}
            </button>
          </div>

          {/* شبكة الصور الحالية */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {images.map((img, idx) => (
              <div key={idx} className="relative group rounded-lg overflow-hidden border border-gray-200">
                <img src={img} alt={`img-${idx}`} className="w-full h-32 object-cover" />
                <button
                  onClick={() => removeImage(idx)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1.5 hover:bg-red-700 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* أزرار إعادة تعيين */}
          <div className="flex flex-wrap gap-3 justify-between items-center">
            <button
              onClick={resetToDefault}
              className="text-sm border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              {isAr ? 'إعادة تعيين للصور الافتراضية' : 'Reset to default images'}
            </button>
          </div>

          {/* زر العودة للرئيسية في الأسفل */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 text-clinic-gold hover:text-clinic-gold-dark transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {isAr ? 'الرجوع إلى الصفحة الرئيسية' : 'Back to Home Page'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}