const base = import.meta.env.BASE_URL;

function Teacher() {
  return (
    <div className="box">
      <h2>Giáo viên chủ nhiệm</h2>
      <img
        src={`${base}images/teacher.jpg`}
        alt="GVCN"
        className="box-img"
      />
      <p>
        Cô Nguyễn Thị Mỹ Tho 
        <br />
        Người luôn đồng hành và dẫn dắt lớp C12.
      </p>
    </div>
  );
}

export default Teacher;
