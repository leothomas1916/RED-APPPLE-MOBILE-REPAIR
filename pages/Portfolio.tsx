import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';
import RevealOnScroll from '../components/RevealOnScroll';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { 
  Sparkles, X, ShieldCheck, Clock, Upload, 
  Film, Image as ImageIcon, Video, Trash2, 
  Plus, CheckCircle, Play, AlertCircle, FileVideo, FileImage, Info
} from 'lucide-react';

const LOCAL_STORAGE_KEY = 'red_apple_portfolio_uploads_v2';

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...PORTFOLIO_ITEMS];
      }
    } catch (e) {
      console.error('Failed to load portfolio uploads:', e);
    }
    return PORTFOLIO_ITEMS;
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // Upload Form State
  const [uploadMediaType, setUploadMediaType] = useState<'image' | 'video'>('image');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('iPhone Glass & Screen');
  const [description, setDescription] = useState('');
  const [equipment, setEquipment] = useState('TBK Laser 958B & Vacuum OCA Press');
  
  // Media Files / URLs
  const [mainMediaUrl, setMainMediaUrl] = useState('');
  const [beforeMediaUrl, setBeforeMediaUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const beforeFileInputRef = useRef<HTMLInputElement>(null);

  // Sync custom uploads to localStorage
  const saveCustomItemsToStorage = (updatedItems: PortfolioItem[]) => {
    const customOnly = updatedItems.filter(item => item.isUserUploaded);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customOnly));
  };

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'type-photo', label: '📷 Photos' },
    { id: 'type-video', label: '🎥 Video Reels' },
    { id: 'iPhone', label: 'iPhone Glass & Screen' },
    { id: 'Samsung', label: 'Samsung Curved OLED' },
    { id: 'Motherboard', label: 'Micro-Soldering' },
    { id: 'MacBook', label: 'MacBook & iPad' },
  ];

  const filteredItems = items.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'type-photo') return item.mediaType === 'image' || !item.mediaType;
    if (selectedCategory === 'type-video') return item.mediaType === 'video';
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  // Handle File Upload (Drag & Drop or File Selection)
  const handleFileProcess = (file: File, isBefore = false) => {
    if (!file) return;

    // Check size limit (15MB warning threshold)
    if (file.size > 20 * 1024 * 1024) {
      alert('File size is larger than 20MB. Please select a compressed media file for better performance.');
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (isBefore) {
        setBeforeMediaUrl(result);
      } else {
        setMainMediaUrl(result);
        if (file.type.startsWith('video/')) {
          setUploadMediaType('video');
        } else if (file.type.startsWith('image/')) {
          setUploadMediaType('image');
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !mainMediaUrl) {
      alert('Please provide a title and upload at least one photo or video file.');
      return;
    }

    setUploadProgress(true);

    setTimeout(() => {
      const newItem: PortfolioItem = {
        id: Date.now(),
        title: title.trim(),
        category,
        mediaType: uploadMediaType,
        image: uploadMediaType === 'image' ? mainMediaUrl : (beforeMediaUrl || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'),
        videoUrl: uploadMediaType === 'video' ? mainMediaUrl : undefined,
        beforeImage: beforeMediaUrl || undefined,
        description: description.trim() || 'Custom showcase item uploaded at Red Apple Halasuru lab.',
        equipment: equipment.trim() || 'Standard Diagnostics & Lab Tools',
        isUserUploaded: true,
        createdAt: new Date().toLocaleDateString()
      };

      const updated = [newItem, ...items];
      setItems(updated);
      saveCustomItemsToStorage(updated);

      setUploadProgress(false);
      setUploadSuccess(true);

      setTimeout(() => {
        setUploadSuccess(false);
        setIsUploadOpen(false);
        // Reset Form
        setTitle('');
        setDescription('');
        setMainMediaUrl('');
        setBeforeMediaUrl('');
      }, 1200);
    }, 600);
  };

  const handleDeleteItem = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to remove this uploaded item from your local showcase?')) {
      const updated = items.filter(item => item.id !== id);
      setItems(updated);
      saveCustomItemsToStorage(updated);
      if (activeModalItem?.id === id) {
        setActiveModalItem(null);
      }
    }
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Header & Upload CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3.5 py-1.5 rounded-full border border-red-200">
                Halasuru Cleanroom Showcase
              </span>
              <h2 className="text-3xl font-black text-gray-900 sm:text-4xl mt-3">
                Precision Repairs & Video Gallery
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
                Explore verified device restorations executed at our Halasuru lab. Upload photos or video reels of repair work to showcase in the portfolio.
              </p>
            </div>

            {/* Upload Button */}
            <button
              onClick={() => setIsUploadOpen(true)}
              className="bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold px-5 py-3 rounded-2xl shadow-lg shadow-red-600/25 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2.5 shrink-0 border border-red-500/30 text-sm"
            >
              <Upload size={18} className="animate-bounce" />
              <span>Upload Photo / Video</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-200'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:bg-red-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setActiveModalItem(item)}
                className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl bg-white border border-gray-200/80 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-950">
                  {item.mediaType === 'video' && item.videoUrl ? (
                    <div className="w-full h-full relative">
                      <video 
                        src={item.videoUrl} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        muted
                        loop
                        playsInline
                        onMouseOver={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                        onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border border-red-400">
                          <Play size={20} className="fill-white ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                        <Film size={11} /> VIDEO REEL
                      </span>
                    </div>
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                  )}

                  {item.isUserUploaded && (
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md flex items-center gap-1">
                      <Sparkles size={10} /> USER UPLOAD
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md w-fit mb-2 shadow-sm">
                      {item.category}
                    </span>
                    <h3 className="text-white font-extrabold text-base group-hover:text-red-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs mt-1 line-clamp-2">{item.description}</p>
                    
                    <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-emerald-400 pt-2 border-t border-gray-800">
                      <span className="flex items-center gap-1">
                        {item.mediaType === 'video' ? <FileVideo size={13} /> : <Sparkles size={13} />}
                        {item.mediaType === 'video' ? 'Play Reel' : 'Inspect Repair'}
                      </span>
                      
                      {item.isUserUploaded && (
                        <button
                          onClick={(e) => handleDeleteItem(item.id, e)}
                          title="Delete Uploaded Item"
                          className="text-gray-400 hover:text-red-400 p-1 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Upload Photo / Video Modal */}
      {isUploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-gray-200 relative my-8">
            {/* Modal Header */}
            <div className="bg-gray-950 text-white p-6 relative">
              <button 
                onClick={() => setIsUploadOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-gray-700"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest mb-1">
                <Upload size={14} />
                <span>Showcase Portfolio Manager</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Upload Repair Photo or Video</h3>
              <p className="text-xs text-gray-400 mt-1">
                Select media files or paste URLs to present repair work directly in the Red Apple portfolio.
              </p>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-5">
              {/* Media Type Toggle */}
              <div className="flex gap-2 p-1 bg-gray-100 rounded-2xl border border-gray-200">
                <button
                  type="button"
                  onClick={() => setUploadMediaType('image')}
                  className={`flex-1 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all ${
                    uploadMediaType === 'image'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FileImage size={15} />
                  <span>Photo (Before / After)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUploadMediaType('video')}
                  className={`flex-1 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all ${
                    uploadMediaType === 'video'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Video size={15} />
                  <span>Video Reel Clip</span>
                </button>
              </div>

              {/* Drag & Drop File Upload Area */}
              <div>
                <label className="block text-xs font-extrabold text-gray-800 mb-2 uppercase tracking-wider">
                  {uploadMediaType === 'video' ? 'Select Video File / Media' : 'Select Photo (After / Finished Repair)'}
                </label>
                
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
                    isDragging
                      ? 'border-red-500 bg-red-50/50 scale-[0.99]'
                      : mainMediaUrl
                      ? 'border-emerald-400 bg-emerald-50/30'
                      : 'border-gray-300 hover:border-red-400 hover:bg-gray-50'
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={(e) => e.target.files?.[0] && handleFileProcess(e.target.files[0])}
                    accept={uploadMediaType === 'video' ? 'video/*' : 'image/*'} 
                    className="hidden" 
                  />

                  {mainMediaUrl ? (
                    <div className="space-y-2">
                      {uploadMediaType === 'video' ? (
                        <video src={mainMediaUrl} className="max-h-36 mx-auto rounded-xl shadow-md" controls muted />
                      ) : (
                        <img src={mainMediaUrl} alt="Preview" className="max-h-36 mx-auto rounded-xl shadow-md object-cover" />
                      )}
                      <p className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1">
                        <CheckCircle size={14} /> File loaded successfully! Click to change.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 py-2">
                      <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                        {uploadMediaType === 'video' ? <Video size={24} /> : <ImageIcon size={24} />}
                      </div>
                      <p className="text-xs font-bold text-gray-800">
                        Drag and drop your {uploadMediaType} here, or <span className="text-red-600 underline">browse file</span>
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Supports MP4, MOV, WEBM, PNG, JPG (Local preview & persistence)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* URL Alternative Option */}
              <div>
                <label className="block text-[11px] font-bold text-gray-500 mb-1">
                  Or paste direct media URL:
                </label>
                <input
                  type="text"
                  placeholder={uploadMediaType === 'video' ? "https://.../video.mp4" : "https://.../photo.jpg"}
                  value={mainMediaUrl}
                  onChange={(e) => setMainMediaUrl(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                />
              </div>

              {/* Optional Before Photo for Slider */}
              {uploadMediaType === 'image' && (
                <div>
                  <label className="block text-xs font-extrabold text-gray-800 mb-1 uppercase tracking-wider">
                    Optional: Before Image (Shattered / Broken View)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Paste Broken Image URL or choose file..."
                      value={beforeMediaUrl}
                      onChange={(e) => setBeforeMediaUrl(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() => beforeFileInputRef.current?.click()}
                      className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold rounded-xl transition-colors shrink-0"
                    >
                      Browse
                    </button>
                    <input 
                      type="file" 
                      ref={beforeFileInputRef}
                      onChange={(e) => e.target.files?.[0] && handleFileProcess(e.target.files[0], true)}
                      accept="image/*" 
                      className="hidden" 
                    />
                  </div>
                </div>
              )}

              {/* Title & Category */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">Device / Repair Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. iPhone 15 Pro Laser Glass Repair"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  >
                    <option value="iPhone Glass & Screen">iPhone Glass & Screen</option>
                    <option value="Samsung Curved OLED">Samsung Curved OLED</option>
                    <option value="Micro-Soldering">Micro-Soldering</option>
                    <option value="MacBook & iPad">MacBook & iPad</option>
                    <option value="Video Reel Showcase">Video Reel Showcase</option>
                  </select>
                </div>
              </div>

              {/* Equipment Used */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">Equipment Used</label>
                <input
                  type="text"
                  placeholder="e.g. TBK Laser 958B, Vacuum OCA Machine"
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">Diagnostic & Technical Details</label>
                <textarea
                  rows={2}
                  placeholder="Describe repair steps, True Tone serialization, or testing..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={uploadProgress || uploadSuccess}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  {uploadProgress ? (
                    <span>Processing Media...</span>
                  ) : uploadSuccess ? (
                    <span className="flex items-center gap-1 text-emerald-300">
                      <CheckCircle size={14} /> Added to Portfolio!
                    </span>
                  ) : (
                    <span>Add to Portfolio</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Detail Modal / Lightbox for Video or Photo */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gray-950 text-white p-6 relative">
              <button 
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-gray-700"
              >
                <X size={18} />
              </button>

              <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
                {activeModalItem.category} Case Study
              </span>
              <h3 className="text-2xl font-black text-white mt-2">{activeModalItem.title}</h3>
              <p className="text-xs text-gray-400 mt-1">Completed at Red Apple Technical Lab, Halasuru</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Media Section: Video or Before-After Photo Slider */}
              {activeModalItem.mediaType === 'video' && activeModalItem.videoUrl ? (
                <div className="rounded-3xl overflow-hidden bg-black shadow-2xl border-4 border-white aspect-video relative">
                  <video 
                    src={activeModalItem.videoUrl} 
                    controls 
                    autoPlay
                    loop
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <BeforeAfterSlider
                  beforeImage={activeModalItem.beforeImage || "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=1000"}
                  afterImage={activeModalItem.image}
                  alt={activeModalItem.title}
                  badgeTitle={`${activeModalItem.title} • 100% Functionality Tested`}
                />
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Diagnostic & Work Performed</h4>
                  <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                    {activeModalItem.description} Complete system diagnostics passed including touch digitizer, display True Tone serial transfer, and thermal power testing.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 block uppercase">Equipment Used</span>
                    <span className="font-extrabold text-gray-800 mt-0.5 block">
                      {activeModalItem.equipment || "TBK Laser 958B & Vacuum OCA Separator"}
                    </span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 block uppercase">Turnaround Time</span>
                    <span className="font-extrabold text-emerald-600 mt-0.5 flex items-center gap-1">
                      <Clock size={13} />
                      Completed in 45 Minutes
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    Backed by 90-Day Free Lab Warranty
                  </span>
                  
                  <Link 
                    to="/booking"
                    onClick={() => setActiveModalItem(null)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
                  >
                    Book Similar Repair
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

