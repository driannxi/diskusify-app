import { useDispatch, useSelector } from "react-redux";
import ThreadList from "../components/ThreadsList";
import ThreadInput from "../components/ThreadInput";
import { useEffect } from "react";
import asyncUsersAndThread from "../states/shared/action";
import { asyncAddThread } from "../states/thread/action";

function HomePage() {
  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUsersAndThread());
  }, [dispatch]);

  function addThreadHandle({ title, body }) {
    dispatch(asyncAddThread({ title, body }));
  }

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 w-full">
      <ThreadInput onAddThread={addThreadHandle} />
      <ThreadList thread={threadList} />
    </div>
  );
}
export default HomePage;
