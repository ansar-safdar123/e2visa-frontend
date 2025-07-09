'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ForumPostPage({ params }) {
  const id = params?.id;
  const [forum, setForum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchForum = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/forum-detail/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        if (res.ok && data.result) {
          setForum(data.result);
        } else {
          setError(data.message || 'Failed to fetch forum.');
        }
      } catch (err) {
        setError('Failed to fetch forum.');
      } finally {
        setLoading(false);
      }
    };
    fetchForum();
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading forum...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!forum) return <div className="p-8">Forum not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg border border-black p-6 mb-6">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
            <Image src={"/images/FeaturedProfessionls/img4.png"} alt={forum.created_by_name} width={40} height={40} className="object-cover" />
          </div>
          <div>
            <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by_name}</span>
            <span className="text-[#9E9E9E] text-xs">· {new Date(forum.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="text-[#40433F] text-sm lg:text-lg font-medium mb-2">{forum.title}</div>
        <div className="text-[#40433F] text-xs lg:text-sm mb-2">{forum.content}</div>
      </div>

      {/* Comment input area */}
      <div className="mb-4">
        <div className="font-semibold mb-2 text-[#40433F]">Write your comment...</div>
        <textarea
          className="w-full border rounded-md p-2 mb-2"
          rows={2}
          placeholder="Write your comment..."
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        <div className="flex gap-2 justify-end">
          <button
            className="px-4 py-1 rounded bg-gray-200 text-gray-700"
            onClick={() => setCommentText("")}
          >
            Cancel
          </button>
          <button
            className="px-4 py-1 rounded bg-[#40433F] text-white"
            onClick={() => setCommentText("")}
            disabled={!commentText.trim()}
          >
            Comment
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-semibold mb-2 text-[#40433F]">Comments:</div>
        <div className="space-y-4">
          {forum.comment && forum.comment.length > 0 ? (
            forum.comment.map((c) => (
              <div key={c.id} className="flex items-start gap-3">
                <Image src={"/images/FeaturedProfessionls/img1.png"} alt={c.created_by_name} width={32} height={32} className="rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-semibold text-[#0A3161] text-xs">{c.created_by_name} <span className="text-[#9E9E9E]">· {new Date(c.created_at).toLocaleDateString()}</span></div>
                  <div className="text-[#40433F] text-xs">{c.content}</div>
                  <button className="text-[#2EC4B6] text-xs mt-1" onClick={() => setReplyingTo(c.id)}>Reply</button>
                  {replyingTo === c.id && (
                    <div className="mt-2">
                      <textarea
                        className="w-full border rounded-md p-2 mb-2"
                        rows={1}
                        placeholder="Write your reply..."
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                      />
                      <div className="flex gap-2 justify-end">
                        <button
                          className="px-4 py-1 rounded bg-gray-200 text-gray-700"
                          onClick={() => { setReplyingTo(null); setReplyText(""); }}
                        >
                          Cancel
                        </button>
                        <button
                          className="px-4 py-1 rounded bg-[#40433F] text-white"
                          onClick={() => { setReplyingTo(null); setReplyText(""); }}
                          disabled={!replyText.trim()}
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  )}
                  {c.replies && c.replies.length > 0 && (
                    <div className="ml-6 mt-2 space-y-2">
                      {c.replies.map(r => (
                        <div key={r.id} className="flex items-start gap-2">
                          <Image src={"/images/FeaturedProfessionls/img1.png"} alt={r.created_by_name} width={28} height={28} className="rounded-full object-cover" />
                          <div>
                            <div className="font-semibold text-[#0A3161] text-xs">{r.created_by_name} <span className="text-[#9E9E9E]">· {new Date(r.created_at).toLocaleDateString()}</span></div>
                            <div className="text-[#40433F] text-xs">{r.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-[#9E9E9E]">No comments yet.</div>
          )}
        </div>
      </div>
    </div>
  );
} 