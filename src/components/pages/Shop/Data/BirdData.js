const BirdData = [
  {
    id: 1,
    name: "Chim Ưng",
    price: "5.000.000",
    status: "Còn hàng",
    imageThuc: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    description:
      "Bộ Ưng (danh pháp khoa học: Accipitriformes) là một bộ chim ăn thịt bao gồm phần lớn các loài chim săn mồi ban ngày như diều hâu, đại bàng, kền kền và nhiều loài khác nữa, với tổng cộng khoảng 263 loài Trong quá khứ người ta có xu hướng thường gộp tất cả các loài chim săn mồi với các loài trong họ Cắt (Falconidae), bao gồm các loài chim cắt và caracara) vào bộ Cắt (Falconiformes).",
  },
  {
    id: 2,
    name: "Chim khướu",
    price: "2.000.000",
    status: "Còn hàng",

    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwFiVU7mbMYnUhM4OBxKGZobSi4fOsKf4vQ&usqp=CAU",
    },
    description:
      "Chim Khướu có tên khoa học là Timaliidae, là loài động vật thuộc bộ Sẻ, thường sinh sống chủ yếu tại khu vực nhiệt đới thuộc các nước trong vùng Đông Nam Á, trong đó rất phổ biến tại Việt Nam. Hiện nay vẫn chưa thể rõ được là chúng xuất hiện ở nước ta từ bao giờ.",
  },
  {
    id: 3,
    name: "Chim chào mào",
    price: "700.000",
    status: "Còn hàng",

    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25Z1kYZsf0Pp_MIoUAFlM6t7bcCD4ptJkUw&usqp=CAU",
    },
    description:
      "Chào mào (Pycnonotus jocosus) là một loài chim thuộc bộ Sẻ phân bố ở châu Á. Nó là một thành viên của họ Chào mào. Nó là một loài động vật ăn quả thường trú được tìm thấy chủ yếu ở châu Á nhiệt đới. Nó đã được đưa bởi con người vào nhiều khu vực nhiệt đới trên thế giới, nơi các quần thể đã tự hình thành. Nó ăn trái cây và côn trùng nhỏ.",
  },
  {
    id: 4,
    name: "Chim họa mi",
    price: "2.000.000",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KNx9Cd9_zxKtZlHDv9b4frFFUADuXWns6g&usqp=CAU",
    },
    description:
      "Chim Họa mi có tên khoa học là Garrulax canorus là một loài chim trong họ Leiothrichidae. Tên gọi Họa mi của loài chim này thể hiện đặc điểm nổi bật của chúng chính là quầng lông sáng màu quanh mắt giống như được vẽ lên vậy.",
  },
  {
    id: 5,
    name: "Chim sáo",
    price: "500.000",
    status: "Còn hàng",

    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw--LOR5L9L5cWGxSq7Hra9YScchRwJiH2g&usqp=CAU",
    },
    description:
      "Chim Sáo có tên khoa học là Sturnidae có ngoại hình thon dài, kích thước trung bình và khá nổi bật. Giống chim này thường sống thành từng bầy, ưa sống trong môi trường rậm rạp có nhiều cây cối. Tại Việt Nam chim Sáo được yêu thích để nuôi làm cảnh với giọng hót đặc trưng.",
  },
  {
    id: 6,
    name: "Chim chòe lửa",
    price: "1.500.000",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWm2rSgeXuXVh6CvuiBFHCICV7C3BpYWqCg&usqp=CAU",
    },
    description:
      "Chích Chòe Lửa có tên khoa học là Copsychus Malabaricus, giống chim thuộc họ Muscicapidae. Đây là giống chim được giới chơi chim cảnh yêu thích với dáng đẹp và giọng hót hay. Chim Chích Chòe Lửa có vóc dáng gọn và nổi bật với màu lông đỏ gạch cùng lông đuôi dài vô cùng nổi bật.",
  },
  {
    id: 7,
    name: "Chim cu gáy",
    price: "2.000.000",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhzZsCa0HMiJl7vGDc8U88n-AHB1tMEwSCw&usqp=CAU",
    },
    description:
      "Chim cu gáy thuộc họ bồ câu, tên khoa học là Stêp- topelia Chinensis, sống hoang dã ở phía Nam Trung Quốc và các nước Đông Nam Á. Ở Việt Nam chim sống ven rừng, các vùng đồng bằng từ Bắc đến Nam, thức ăn chủ yếu là các hạt thưc vật: Lúa, ngô, kê, đậu, hạt cỏ dại.",
  },
  {
    id: 8,
    name: "Chim hút mật",
    price: "500.000",
    status: "Còn hàng",

    image: {
      uri: "https://my-pet.vn/wp-content/uploads/2022/12/chim-hut-mat-1.jpg",
    },
    description:
      "Chim Hút mật có tên khoa học là Nectariniidae, thuộc họ chim Sẻ có kích thước rất nhỏ. Đặc điểm nổi bật của giống chim này so với các loại chim khác đó chính là khả năng hút mật. Chim phân bố tại nhiều khu vực trên thế giới, phổ biến nhất tại khu vực Nam châu Á, châu Phi hoặc phía Bắc của Australia.",
  },
];

export default BirdData;
