const base = import.meta.env.BASE_URL;

function ClassInfo() {
  return (
    <div className="box">
      <h2>Lớp C12</h2>
      <img
        src={`${base}images/class.jpg`}
        alt="Lớp C12"
        className="box-img"
      />
      <p>
        Lớp C12 – niên khóa 2023–2026.  
        Một tập thể đoàn kết, năng động và đầy kỷ niệm.
      </p>
    </div>
  );
}

export default ClassInfo;
