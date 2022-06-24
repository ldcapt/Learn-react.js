import React, { useEffect, useState } from "react";

// 1. useEffect(callback);
//    Gọi call back mỗi khi component re-render
//    Gọi callback sau khi compnent thêm element vào dom

// 2. useEffect(callback, []);
//    Chỉ gọi callback 1 lần sau khi component mount

// 3. useEffect(callback, [dependency]);
//    Callback sẽ được gọi lại mỗi khi dependencies thay đổi

// -----
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component được unmount
// 3. Cleanup function luôn được gọi trước khi callback được gọi

const tabs = ["posts", "comments", "albums"];

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState();
  const [activeTab, setActiveTab] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [countDown, setCountDown] = useState(180);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
    }
    setAvatar(file);
    console.log('re-choose image');
  };

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${activeTab}`)
      .then((resp) => resp.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    // clean up function
    return () => {
      console.log("Unmounting...");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Content sample</h1>
      <div>Count down: {countDown}</div>
      <div style={{ padding: "8px 0px" }}>
        <input type="file" onChange={handlePreviewAvatar} />
        {avatar && <img src={avatar.preview} style={{ padding: "8px 0px" }} alt="" width="80%" />}
      </div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={
            activeTab === tab ? { color: "#FFF", backgroundColor: "#333" } : {}
          }
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{ position: "fixed", bottom: "24px", right: "24px" }}
          onClick={() => (window.location.href = "#")}
        >
          Go to Top
        </button>
      )}
    </div>
  );
};

export default Content;
