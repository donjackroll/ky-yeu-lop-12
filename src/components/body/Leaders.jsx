const base = import.meta.env.BASE_URL;

function Leaders() {
  return (
    <div className="leaders">
      <h2>Ban cán sự lớp</h2>

      <div className="leaders-grid">
        <Leader title="Lớp trưởng" name="Diệp Thành Danh" img="loptruong.jpg" />
        <Leader title="Bí thư" name="Mai Thị Minh Thư" img="bithu.jpg" />
        <Leader title="LP học tập" name="Võ Lê Nguyên" img="lophoc.jpg" />
        <Leader title="LP lao động" name="Nguyễn Khang Việt" img="laodong.jpg" />
        <Leader title="LP kỷ luật" name="Nguyễn Minh Hằng" img="kyluat.jpg" />

        {/* Nhóm trưởng */}
        <div className="leader-card group-card">
          <h3>Nhóm trưởng</h3>
          <div className="group-grid">
            {[1,2,3,4,5,6].map(i => (
              <div key={i}>
                <img src={`${base}images/bancansu/nhomtruong/nt${i}.jpg`} />
                <p>Nhóm {i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Leader({ title, name, img }) {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="leader-card">
      <img src={`${base}images/bancansu/${img}`} />
      <h3>{title}</h3>
      <p>{name}</p>
    </div>
  );
}

export default Leaders;
