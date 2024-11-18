<!-- <!DOCTYPE html> -->
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
        <h1>林跃</h1>
        <p>机器人路径与运动规划 | 硕士研究生 | 大连理工大学 (985)</p>
    </header>

    <div class="container">
        <section id="education">
            <h2>教育背景</h2>
            <ul>
                <li>大连理工大学, 信息与通信工程专业, 硕士 (2023年9月 - 至今)</li>
                <li>大连理工大学, 人工智能专业, 本科 (2019年9月 - 2023年6月)</li>
            </ul>
        </section>

        <section id="publications">
            <h2>发表论文</h2>
            <div class="publication-item">
                <strong>Safety-First Tracker: A Trajectory Planning Framework for Omnidirectional Robot Tracking</strong><br>
                <i>IROS 2024, 第一作者</i><br>
                为了让机器人自动跟随目标并避免碰撞，现有的方法需要联合优化多个目标函数，难以保证最优性。本文设计了一种新的两阶段轨迹规划框架，优先保证机器人的轨迹安全性，然后规划机器人的朝向以保证目标可视性。现实世界的实验证明了本文提出的方法在复杂的动态环境中的适用性。
                <!-- <a href="论文链接地址" target="_blank">点击阅读论文</a> -->
            </div>
            <div class="publication-item">
                <strong>Eva-Tracker: An ESDF-update-free Approach for Aerial Tracking with Visibility-aware Planning</strong><br>
                <i>ICRA 2025 在投, 第一作者</i><br>
                对于机器人自动跟随目标，现有的方法大多需要依赖实时更新的 ESDF 来实现轨迹安全性和目标可视性，然而实时更新 ESDF 需要大量计算。本文提出了一种用于空中跟随的无需 ESDF 更新的轨迹优化方法，能够在保持性能的前提下大大降低计算量。现实世界的实验表明本文的方法在无人机目标跟随任务上取得了成功。
                <!-- <a href="论文链接地址" target="_blank">点击阅读论文</a> -->
            </div>
        </section>

        <section id="projects">
            <h2>项目经历</h2>
            <div class="project-item">
                <b>单智能体主动感知和对抗博弈建模学习</b><br>
                <i>国家自然科学基金委员会重大项目。</i><br>
                担任该项目技术负责人。负责单机器人在对抗博弈场景下的软硬件系统开发及感知、规划、决策等算法的研发。基于 ROS 设计了完整的用于机器人博弈的系统，将 YOLOv6、HiT 等检测跟踪算法和 FastPlanner 等规划算法集成部署到了 Orin 上，并和团队成员共同完成了决策算法的研发。目前，该项目已具备稳定的后端算法和前端界面。<br>
                <!-- <a href="项目链接地址" target="_blank">查看详情</a> -->
            </div>
            <div class="project-item">
                <strong>开放环境多智能体群智对抗博弈理论方法及应用</strong><br>
                <i>国家自然科学基金委员会重大项目，清华大学深圳国际研究生院交流合作项目。</i><br>
                担任规划控制组技术负责人，兼任视觉感知组技术负责人。负责开发全向移动机器人在带有坡道和窄道的环境中的自主运动规划算法。<br>
                <!-- <a href="项目链接地址" target="_blank">查看详情</a> -->
            </div>
            <div class="project-item">
                <strong>基于 Transformer 的轻量化目标跟踪方法研究</strong><br>
                中国北方车辆研究所合作项目。<br>
                负责开发鲁棒的高精度轻量化单目标跟踪模型，并在 JetSon Orin NX 边缘计算设备上部署。<br>
                <!-- <a href="项目链接地址" target="_blank">查看详情</a> -->
            </div>
        </section>

        <section id="competitions">
            <h2>竞赛成果</h2>
            <ul>
                <li>ICRA 2022 Sim2Real 挑战赛，第四名</li>
                <li>第 12 届蓝桥杯 Python 大学 A 组全国总决赛，二等奖</li>
                <li>2022 年中国大学生计算机设计大赛，全国二等奖</li>
                <li>第 13 届全国大学生数学竞赛，全国二等奖</li>
                <li>第 12 届全国大学生数学竞赛，全国二等奖</li>
            </ul>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Yue Lin. All Rights Reserved.</p>
        <!-- <p>联系邮箱: <a href="mailto:您的邮箱@example.com">您的邮箱@example.com</a></p> -->
    </footer>
</body>
</html>
