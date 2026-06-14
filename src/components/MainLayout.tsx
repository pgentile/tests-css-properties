import "./MainLayout.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-layout">
      <div className="background"></div>
      <div className="inner">
        <div className="content">{children}</div>
        <div className="test-input">
          <input type="text" placeholder="Type something..." />
        </div>
      </div>
    </div>
  );
}
