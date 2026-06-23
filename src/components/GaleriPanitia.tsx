import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Image as ImageIcon } from 'lucide-react';

const panitiaGroups = [
  {
    id: 'inti',
    name: 'Panitia Inti',
    cover: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    photos: [
      { id: 1, url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Ketua & Wakil Ketua' },
      { id: 2, url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80', caption: 'Sekretaris & Bendahara' },
    ]
  },
  {
    id: 'acara',
    name: 'Seksi Acara',
    cover: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    photos: [
      { id: 3, url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80', caption: 'Tim Kreatif Acara' },
      { id: 4, url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80', caption: 'Koor Lomba' },
      { id: 5, url: 'https://images.unsplash.com/photo-1475721028070-2051d52a2339?auto=format&fit=crop&w=800&q=80', caption: 'Briefing Acara' },
    ]
  },
  {
    id: 'humas',
    name: 'Seksi Humas & Dana',
    cover: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80',
    photos: [
      { id: 6, url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', caption: 'Tim Pencari Dana' },
      { id: 7, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', caption: 'Tim Publikasi' },
    ]
  },
  {
    id: 'perlengkapan',
    name: 'Seksi Perlengkapan',
    cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    photos: [
      { id: 8, url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80', caption: 'Tim Logistik' },
      { id: 9, url: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80', caption: 'Persiapan Panggung' },
    ]
  }
];

export const GaleriPanitia: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<typeof panitiaGroups[0] | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof panitiaGroups[0]['photos'][0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedGroup || selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedGroup]);

  return (
    <div className="w-full mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Galeri Kepanitiaan</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Di balik suksesnya acara 17-an, ada tim hebat yang bekerja keras. Berikut adalah potret keseruan dari masing-masing divisi panitia.
        </p>
      </motion.div>

      {/* Grid of Groups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {panitiaGroups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedGroup(group)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              <img 
                src={group.cover} 
                alt={group.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
                <ImageIcon size={14} />
                <span>{group.photos.length} Foto</span>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between">
              <h4 className="font-bold text-gray-900">{group.name}</h4>
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#cc3333] flex items-center justify-center group-hover:bg-[#cc3333] group-hover:text-white transition-colors">
                <Users size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Group Photos */}
      {createPortal(
        <AnimatePresence>
          {selectedGroup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGroup(null)}
              className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-12"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
              >
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedGroup.name}</h3>
                    <p className="text-sm text-gray-500">{selectedGroup.photos.length} Foto</p>
                  </div>
                  <button
                    onClick={() => setSelectedGroup(null)}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-[#cc3333] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto no-scrollbar flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedGroup.photos.map((photo, i) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer"
                        onClick={() => setSelectedPhoto(photo)}
                      >
                        <img 
                          src={photo.url} 
                          alt={photo.caption} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 w-full">
                            <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              {photo.caption}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Fullscreen Single Photo Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
              >
                <X size={24} />
              </button>
              
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-center"
              >
                <p className="text-white text-lg font-medium tracking-wide">{selectedPhoto.caption}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};
