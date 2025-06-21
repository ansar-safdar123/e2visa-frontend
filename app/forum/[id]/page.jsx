'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ForumsData = [
  {
    user: { name: 'Johncim', avatar: "/images/FeaturedProfessionls/img4.png" },
    time: '4 days ago',
    question: 'who have much more details about E2Visa',
    answer: 'The E-2 Visa is a non-immigrant Visa that allows foreigners to enter the U.S. with the purchase of an existing business. The investment must be significantly proportional to the total investment, usually more than half the total value of the enterprise (or, if a new business, an amount normally considered necessary to establish the business).',
    replies: 12,
  },
  {
    user: { name: 'Quobyte', avatar: "/images/FeaturedProfessionls/img3.png" },
    time: '4 days ago',
    question: 'how much money do I need to have available to qualify for the E2 or EB-5 Visa?',
    answer: '',
    replies: 12,
  },
  {
    user: { name: 'xys', avatar: "/images/FeaturedProfessionls/img1.png" },
    time: '4 days ago',
    question: '',
    answer: 'An investment of at least $80,000 to $120,000 is considered substantial. However, it is not fixed and there are consulates who may accept as low as $80,000, while a few demand as much as $500,000. If the investment becomes equal or greater than $500,000, you may be eligible to petition for a permanent immigration status “Green Card” via an EB-5 Visa application.',
    replies: 12,
  },
  {
    user: { name: 'Quobyte', avatar: "/images/FeaturedProfessionls/img2.png" },
    time: '4 days ago',
    question: 'What do I need to invest?',
    answer: '',
    replies: 12,
  },
];

function getCommentsKey(id) {
  return `forum_comments_${id}`;
}

export default function ForumPostPage({ params }) {
  const id = params?.id || 0;
  const post = ForumsData[id];
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [hasMounted, setHasMounted] = useState(false);

  // Only set hasMounted to true after the component mounts (client-side)
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Load comments from localStorage only after mount
  useEffect(() => {
    if (hasMounted) {
      const saved = localStorage.getItem(getCommentsKey(id));
      if (saved) setComments(JSON.parse(saved));
    }
  }, [id, hasMounted]);

  // Save comments to localStorage only after mount
  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem(getCommentsKey(id), JSON.stringify(comments));
    }
  }, [comments, id, hasMounted]);

  const handleComment = () => {
    if (!commentText.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), user: { name: 'You', avatar: '/images/FeaturedProfessionls/img1.png' }, text: commentText, time: 'now', replies: [] },
    ]);
    setCommentText("");
  };

  const handleReply = (commentId) => {
    if (!replyText.trim()) return;
    setComments(comments.map(c =>
      c.id === commentId
        ? { ...c, replies: [...(c.replies || []), { id: Date.now(), user: { name: 'You', avatar: '/images/FeaturedProfessionls/img1.png' }, text: replyText, time: 'now' }] }
        : c
    ));
    setReplyingTo(null);
    setReplyText("");
  };

  if (!post) return <div className="p-8">Post not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="bg-white rounded-lg border border-black p-6 mb-6">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
            <Image src={post.user.avatar} alt={post.user.name} width={40} height={40} className="object-cover" />
          </div>
          <div>
            <span className="font-semibold text-[#0A3161] mr-2">{post.user.name}</span>
            <span className="text-[#9E9E9E] text-xs">· {post.time}</span>
          </div>
        </div>
        {post.question && (
          <div className="text-[#40433F] text-sm lg:text-lg font-medium mb-2">{post.question}</div>
        )}
        {post.answer && (
          <div className="text-[#40433F] text-xs lg:text-sm mb-2">{post.answer}</div>
        )}
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-2 text-[#40433F]">Comment</div>
        <textarea className="w-full border rounded-md p-2 mb-2" rows={2} placeholder="Write your comment..." value={commentText} onChange={e => setCommentText(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-1 rounded bg-gray-200 text-gray-700" onClick={() => setCommentText("")}>Cancel</button>
          <button className="px-4 py-1 rounded bg-[#40433F] text-white" onClick={handleComment}>Comment</button>
        </div>
      </div>
      <div className="mt-6">
        <div className="font-semibold mb-2 text-[#40433F]">Comments:</div>
        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c.id} className="flex items-start gap-3">
              <Image src={c.user.avatar} alt={c.user.name} width={32} height={32} className="rounded-full object-cover" />
              <div className="flex-1">
                <div className="font-semibold text-[#0A3161] text-xs">{c.user.name} <span className="text-[#9E9E9E]">· {c.time}</span></div>
                <div className="text-[#40433F] text-xs">{c.text}</div>
                <button className="text-[#2EC4B6] text-xs mt-1" onClick={() => setReplyingTo(c.id)}>Reply</button>
                {replyingTo === c.id && (
                  <div className="mt-2">
                    <textarea className="w-full border rounded-md p-2 mb-2" rows={1} placeholder="Write your reply..." value={replyText} onChange={e => setReplyText(e.target.value)} />
                    <div className="flex gap-2 justify-end">
                      <button className="px-4 py-1 rounded bg-gray-200 text-gray-700" onClick={() => { setReplyingTo(null); setReplyText(""); }}>Cancel</button>
                      <button className="px-4 py-1 rounded bg-[#40433F] text-white" onClick={() => handleReply(c.id)}>Reply</button>
                    </div>
                  </div>
                )}
                {c.replies && c.replies.length > 0 && (
                  <div className="ml-6 mt-2 space-y-2">
                    {c.replies.map(r => (
                      <div key={r.id} className="flex items-start gap-2">
                        <Image src={r.user.avatar} alt={r.user.name} width={28} height={28} className="rounded-full object-cover" />
                        <div>
                          <div className="font-semibold text-[#0A3161] text-xs">{r.user.name} <span className="text-[#9E9E9E]">· {r.time}</span></div>
                          <div className="text-[#40433F] text-xs">{r.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 