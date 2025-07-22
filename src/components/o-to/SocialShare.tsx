'use client';

import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from 'lucide-react';

const shareUrl = 'https://vinfastautolongbien.vn/o-to/vinfast-minio-green/';
const shareTitle = 'VinFast Minio Green';

export default function SocialShare() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-3 mt-4">
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition"
        title="Chia sẻ Facebook"
        aria-label="Facebook"
      >
        <Facebook size={18} />
      </Link>

      {/* Twitter */}
      <Link
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-sky-500 hover:text-white transition"
        title="Chia sẻ Twitter"
        aria-label="Twitter"
      >
        <Twitter size={18} />
      </Link>

      {/* Email */}
      <Link
        href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Xem chi tiết tại: ${shareUrl}`)}`}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-neutral-600 hover:text-white transition"
        title="Gửi Email"
        aria-label="Email"
      >
        <Mail size={18} />
      </Link>

      {/* LinkedIn */}
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white transition"
        title="Chia sẻ LinkedIn"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </Link>
    </div>
  );
}
