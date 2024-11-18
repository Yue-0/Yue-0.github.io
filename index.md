<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yue Lin</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: #333;
            background: linear-gradient(to bottom, #f4f4f9, #eaeaea);
        }
        header {
            background: #0078d7;
            color: #fff;
            padding: 20px 10px;
            text-align: center;
        }
        header img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            object-fit: cover;
            margin-bottom: 10px;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            color: #444;
        }
        ul {
            padding: 0;
            list-style: none;
        }
        ul li {
            margin-bottom: 10px;
        }
        a {
            color: #0078d7;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background: #0078d7;
            color: #fff;
        }
        .project-item, .publication-item {
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #f9f9f9;
        }
        .project-item:hover, .publication-item:hover {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .flex-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        .flex-container > div {
            flex: 1;
            min-width: 300px;
        }
    </style>
</head>
<body>
    <header>
        <img src="me.jpg" alt="Yue Lin">
        <h1>Yue Lin</h1>
        <p>机器人领域 | 第二年硕士生 | 大连理工大学</p>
    </header>

    <div class="container">
        <section id="education">
            <h2>教育经历</h2>
            <ul>
                <li>大连理工大学，计算机科学与技术专业，硕士（2023年9月 - 至今）</li>
                <li>大连理工大学，计算机科学与技术专业，本科（2019年9月 - 2023年7月）</li>
            </ul>
        </section>

        <section id="publications">
            <h2>发表论文</h2>
            <div class="publication-item">
                <strong>Eva-Tracker: An ESDF-update-free Approach for Aerial Tracking with Visibility-aware Planning</strong><br>
                <i>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2024</i><br>
                <a href="论文链接地址" target="_blank">点击阅读论文</a>
            </div>
        </section>

        <section id="projects">
            <h2>项目经历</h2>
            <div class="flex-container">
                <div class="project-item">
                    <strong>多传感器融合机器人目标跟踪系统</strong><br>
                    设计和实现了一种高效的机器人追踪系统，集成了视觉目标追踪、轨迹预测和运动规划。<br>
                    <a href="项目链接地址" target="_blank">查看详情</a>
                </div>
                <div class="project-item">
                    <strong>Eva-Tracker 开发</strong><br>
                    开发了ESDF更新免疫、可视性感知的高效机器人追踪算法。<br>
                    <a href="项目链接地址" target="_blank">查看详情</a>
                </div>
            </div>
        </section>

        <section id="competitions">
            <h2>比赛经历</h2>
            <ul>
                <li>2023年全国机器人开发挑战赛，二等奖</li>
                <li>2022年大连理工大学智能车竞赛，一等奖</li>
            </ul>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 [您的姓名]. All Rights Reserved.</p>
        <p>联系邮箱: <a href="mailto:您的邮箱@example.com">您的邮箱@example.com</a></p>
    </footer>
</body>
</html>
