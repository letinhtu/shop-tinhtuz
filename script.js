console.log("Website Shop TinhTuz đã sẵn sàng!");
document.addEventListener("DOMContentLoaded", () => {
    const balanceEl = document.getElementById("user-balance");
    const usernameEl = document.getElementById("username");

    // Lấy dữ liệu từ localStorage
    const username = localStorage.getItem("username") || "Khách";
    const balance = localStorage.getItem("balance") || 0;

    // Hiển thị ra menu
    usernameEl.textContent = username;
    balanceEl.textContent = `Số dư: ${Number(balance).toLocaleString()}đ`;
});
function muaAcc(id, rank, gia, img) {
    let balance = parseInt(localStorage.getItem("balance") || 0);
    if (balance < gia) {
        alert("Số dư không đủ, vui lòng nạp thêm!");
        return;
    }

    balance -= gia;
    localStorage.setItem("balance", balance);

    // Lưu vào lịch sử
    let history = JSON.parse(localStorage.getItem("lichsu") || "[]");
    history.push({
        id: id,
        rank: rank,
        gia: gia,
        img: img,
        ngay: new Date().toLocaleString(),
        trangthai: "Đã giao"
    });
    localStorage.setItem("lichsu", JSON.stringify(history));

    alert(`Mua acc ${rank} thành công!`);
    location.reload();
}
