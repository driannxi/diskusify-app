import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailThread from '../components/DetailThread.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { asyncThreadDetail } from '../states/threadDetail/action.js';
import CommentInput from '../components/CommentInput.jsx';
import CommentItem from '../components/CommentItem.jsx';
import { asyncAddComment } from '../states/comment/action.js';

export default function DetailPage() {
  const { id } = useParams();
  const threadDetail = useSelector((state) => state.threadDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncThreadDetail(id));
  }, [id, dispatch]);

  function handleComment(content) {
    dispatch(asyncAddComment({ threadId: id, content }));
  }

  if (!threadDetail) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col gap-6">
      <DetailThread {...threadDetail} />
      <CommentInput onAddComment={handleComment} />

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#131b2e] border border-[#232f48] shadow-sm">
          <h2 className="text-lg font-bold text-slate-100">
            Komentar ({threadDetail.comments.length})
          </h2>
        </div>

        {threadDetail.comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </section>
    </div>
  );
}
