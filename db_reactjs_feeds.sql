-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 10, 2021 lúc 07:03 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_reactjs_feeds`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `cid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `comment` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`cid`, `uid`, `pid`, `comment`, `time`) VALUES
(2, 501200026, 2, 'Great', '2021-12-10 06:02:42'),
(3, 501200055, 2, 'Tuyet voi!', '2021-12-10 06:02:42');

--
-- Bẫy `comments`
--
DELIMITER $$
CREATE TRIGGER `divSumCmt` AFTER DELETE ON `comments` FOR EACH ROW UPDATE posts set sumCmt = sumCmt - 1 where pid = OLD.pid
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `sumCmt` AFTER INSERT ON `comments` FOR EACH ROW UPDATE posts set sumCmt = sumCmt + 1 WHERE pid = NEW.pid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `likes`
--

CREATE TABLE `likes` (
  `lid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Bẫy `likes`
--
DELIMITER $$
CREATE TRIGGER `divSumLike` AFTER DELETE ON `likes` FOR EACH ROW update posts set sumLike = sumLike - 1 WHERE pid = OLD.pid
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `sumLike` AFTER INSERT ON `likes` FOR EACH ROW UPDATE posts set sumLike = sumLike + 1 where pid = NEW.pid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `pid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `sumLike` int(11) NOT NULL DEFAULT 0,
  `sumCmt` int(11) NOT NULL DEFAULT 0,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`pid`, `uid`, `title`, `content`, `sumLike`, `sumCmt`, `date`) VALUES
(1, 501200018, 'Fisrt Post Of Hung', 'First content', 0, 0, '2021-12-10 12:39:30'),
(2, 501200026, 'First post of Bao', 'Quê tôi ở Đồng Tháp, xin chào các bạn!', 0, 2, '2021-12-10 12:40:36'),
(3, 501200026, 'Second post of Bao', 'Quê tôi cũng ở Đồng Tháp, HIHIHI!', 0, 0, '2021-12-10 12:41:50'),
(4, 501200055, 'First post of Long', 'Hi! I am Long', 0, 0, '2021-12-10 12:41:50');

--
-- Bẫy `posts`
--
DELIMITER $$
CREATE TRIGGER `divSumPost` AFTER DELETE ON `posts` FOR EACH ROW UPDATE users set sumPost = sumPost - 1 where uid = OLD.uid
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `sumPost` AFTER INSERT ON `posts` FOR EACH ROW UPDATE users set sumPost = sumPost + 1 where uid = NEW.uid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `uid` int(11) NOT NULL,
  `uname` text NOT NULL,
  `phone` int(10) NOT NULL,
  `gender` text NOT NULL,
  `image` text NOT NULL DEFAULT 'default.jpg',
  `sumPost` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`uid`, `uname`, `phone`, `gender`, `image`, `sumPost`) VALUES
(501200018, 'Lê Ngọc Hưng', 776808976, 'Nam', 'default.png', 1),
(501200023, 'Pham Thị Phương Thảo', 926322695, 'Nữ', 'default.png', 0),
(501200026, 'Nguyễn Hoàng Chí Bảo', 926322695, 'Nam', 'default.png', 2),
(501200055, 'Nguyễn Thành Long', 776808976, 'Nam', 'default.png', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `fk_comments_post_pid` (`pid`) USING BTREE,
  ADD KEY `fk_comments_users_uid` (`uid`);

--
-- Chỉ mục cho bảng `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`lid`),
  ADD KEY `fk_likes_users_uid` (`uid`),
  ADD KEY `fk_likes_posts_pid` (`pid`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`pid`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `likes`
--
ALTER TABLE `likes`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=501200056;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
