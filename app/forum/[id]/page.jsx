'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import LoadingSpinner from '@/app/components/common/LoadingSpinner';

export default function ForumPostPage({ params }) {
  const id = params?.id;
  const [forum, setForum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [commentError, setCommentError] = useState("");
  const [replyError, setReplyError] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);
  const BACKEND_STORAGE_URL = process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL;

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

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!forum) return <div className="p-8">Forum not found.</div>;

  const handleAddComment = async () => {
    if (!commentText.trim()) {
      setCommentError("Please enter a comment before submitting.");
      return;
    }
    setCommentError("");
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          forum_id: id,
          content: commentText,
        }),
      });
      const data = await res.json();
      if (res.ok && data.result) {
        toast.success('Comment added!', { position: 'top-right' });
        setCommentText("");
        setCommentError("");
        // Refresh forum data to show new comment
        const forumRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/forum-detail/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const forumData = await forumRes.json();
        if (forumRes.ok && forumData.result) {
          setForum(forumData.result);
        }
      } else {
        setCommentError(data.message || 'Failed to add comment.');
        toast.error(data.message || 'Failed to add comment.', { position: 'top-right' });
      }
    } catch (err) {
      setCommentError('Failed to add comment.');
      toast.error('Failed to add comment.', { position: 'top-right' });
    }
  };

  const handleAddReply = async (commentId) => {
    if (!replyText.trim()) {
      setReplyError("Please enter a reply before submitting.");
      return;
    }
    setReplyError("");
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/reply/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          forum_id: id,
          comment_id: commentId,
          content: replyText,
        }),
      });
      const data = await res.json();
      if (res.ok && data.result) {
        toast.success('Reply added!', { position: 'top-right' });
        setReplyText("");
        setReplyError("");
        setReplyingTo(null);
        // Refresh forum data to show new reply
        const forumRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/forum-detail/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const forumData = await forumRes.json();
        if (forumRes.ok && forumData.result) {
          setForum(forumData.result);
        }
      } else {
        setReplyError(data.message || 'Failed to add reply.');
        toast.error(data.message || 'Failed to add reply.', { position: 'top-right' });
      }
    } catch (err) {
      setReplyError('Failed to add reply.');
      toast.error('Failed to add reply.', { position: 'top-right' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg border border-black p-6 mb-6">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
            {forum.created_by?.image && BACKEND_STORAGE_URL ? (
              <Image
                src={`${BACKEND_STORAGE_URL}/${forum.created_by.image}`}
                alt={forum.created_by?.name || "User"}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="flex items-center justify-center w-full h-full">
                <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                  <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                  <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                </svg>
              </span>
            )}
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by.name}</span>
            <div className="w-6 h-6 rounded-full overflow-hidden mr-3 border border-gray-200">
              {forum.creator_badge_icon && BACKEND_STORAGE_URL ? (
                <Image
                  src={`${BACKEND_STORAGE_URL}/${forum.creator_badge_icon}`}
                  alt={forum.created_by?.name || "User"}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="flex items-center justify-center w-full h-full">
                  <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                    <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                    <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                  </svg>
                </span>
              )}
            </div>
            <span className="text-[#9E9E9E] text-xs">· {new Date(forum.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="text-[#40433F] text-sm lg:text-lg font-medium mb-2">{forum.title}</div>
        <div className="text-[#40433F] text-xs lg:text-sm mb-2">{forum.content}</div>
      </div>

      {/* Comment input area */}
      {token && (
        <div className="mb-4">
          <div className="font-semibold mb-2 text-[#40433F]">Write your comment...</div>
          <textarea
            className="w-full border border-black rounded-md p-2 mb-2 text-[#40433F]"
            rows={2}
            placeholder="Write your comment..."
            value={commentText}
            onChange={e => { if (e.target.value.length <= 500) setCommentText(e.target.value); if (commentError) setCommentError(""); }}
            maxLength={500}
          />
          <div className="text-xs text-right pr-1 pb-1" style={{ color: commentText.length >= 500 ? '#e53e3e' : '#40433F' }}>
            {commentText.length}/500
          </div>
          {commentError && <div className="text-red-500 text-xs mb-2">{commentError}</div>}
          <div className="flex gap-2 justify-end">
            <button
              className="px-4 py-1 rounded bg-gray-200 text-gray-700"
              onClick={() => setCommentText("")}
            >
              Cancel
            </button>
            <button
              className="px-4 py-1 rounded bg-[#40433F] text-white"
              onClick={handleAddComment}
            >
              Comment
            </button>
          </div>
        </div>
      )}

      <div className="mt-6">
        <div className="font-semibold mb-2 text-[#40433F]">Comments:</div>
        <div className="space-y-4">
          {forum.comment && forum.comment.length > 0 ? (
            forum.comment.map((c) => (
              <div key={c.id} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border flex justify-center items-center border-gray-200">

                  {c.user && c.user.image && BACKEND_STORAGE_URL ? (
                    <Image
                      src={`${BACKEND_STORAGE_URL}/${c.user.image}`}
                      alt={c.user?.name || "User"}
                      width={32}
                      height={32}
                      className="object-cover rounded-full w-full h-full"
                    />
                  ) : (
                    <span className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                        <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                        <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                      </svg>
                    </span>
                  )}
                </div>


                <div className="flex-1">
                  <div className="font-semibold text-[#0A3161] text-sm flex items-center gap-2">
                    <span>
                      {c.user.name}
                    </span>
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                      {c.commentor_badge_icon && BACKEND_STORAGE_URL ? (
                        <Image
                          src={`${BACKEND_STORAGE_URL}/${c.commentor_badge_icon}`}
                          alt={c.user.created_by?.name || "User"}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="flex items-center justify-center w-full h-full">
                          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                            <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <span className="text-[#9E9E9E]">{new Date(c.created_at).toLocaleDateString()}</span>
                  </div>
                  {/* <div className="text-[#40433F] text-sm"> */}
                  <div className="text-[#40433F]" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    {c.content}
                  </div>
                  {token && (
                    <button className="text-[#2EC4B6] text-xs mt-1" onClick={() => setReplyingTo(c.id)}>Reply</button>
                  )}
                  {token && replyingTo === c.id && (
                    <div className="mt-2">
                      <textarea
                        className="w-full border rounded-md p-2 mb-2 text-[#40433F]"
                        rows={1}
                        placeholder="Write your reply..."
                        value={replyText}
                        onChange={e => { if (e.target.value.length <= 500) setReplyText(e.target.value); if (replyError) setReplyError(""); }}
                        maxLength={500}
                      />
                      <div className="text-sm text-right pr-1 pb-1" style={{ color: replyText.length >= 500 ? '#e53e3e' : '#40433F' }}>
                        {replyText.length}/500
                      </div>
                      {replyError && <div className="text-red-500 mb-2">{replyError}</div>}
                      <div className="flex gap-2 justify-end">
                        <button
                          className="px-4 py-1 rounded bg-gray-200 text-gray-700"
                          onClick={() => { setReplyingTo(null); setReplyText(""); setReplyError(""); }}
                        >
                          Cancel
                        </button>
                        <button
                          className="px-4 py-1 rounded bg-[#40433F] text-white"
                          onClick={() => handleAddReply(c.id)}
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  )}
                  {c.replies && c.replies.length > 0 && (
                    <div className="text-sm sm:ml-6 mt-2 space-y-4">
                      {c.replies.map(r => (
                        <div key={r.id} className="flex items-start w-full gap-3">
                          <div className="!min-w-10 !h-10 rounded-full flex items-center justify-center">

                            {r.user && r.user.image && BACKEND_STORAGE_URL ? (
                              <Image
                                src={`${BACKEND_STORAGE_URL}/${r.user.image}`}
                                alt={r.user.name}
                                width={28}
                                height={28}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <span className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                                <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                                  <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                                  <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                                </svg>
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-[#0A3161] flex text-xs sm:text-sm items-center">
                              <span className=''>{r.user.name}</span>
                            <div className="w-6 h-6 rounded-full overflow-hidden mx-1 border border-gray-200">
                              {r.replier_badge_icon && BACKEND_STORAGE_URL ? (
                                <Image
                                  src={`${BACKEND_STORAGE_URL}/${r.replier_badge_icon}`}
                                  alt={forum.created_by?.name || "User"}
                                  width={40}
                                  height={40}
                                  className="object-cover w-full h-full"
                                />
                              ) : (
                                <span className="flex items-center justify-center w-full h-full">
                                  <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                                    <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                                    <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                                  </svg>
                                </span>
                              )}
                            </div>
                              <span className="text-[#9E9E9E]">{new Date(r.created_at).toLocaleDateString()}</span>
                            </div>
                            <div className="text-[#40433F]" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{r.content}</div>

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