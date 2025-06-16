/* author: YueLin */

const text = {
    "en": {
        "name": "Yue Lin",

        "profile": "Hi, I'm Yue Lin, this website is a brief introduction about me.<br>I graduated from Dalian University of Technology in 2023 with a bachelor's degree in engineering and was subsequently recommended to pursue a master's degree as a graduate student in the IIAU Lab. <br>My supervisor is Professor Huchuan Lu, and my research direction is robot autonomous motion planning and visual tracking. <br>Currently, I'm interning at Hikvision in Hangzhou, where I'm involved in the development of autonomous navigation algorithms for robots.",

        "papers": "Papers",

        "iros25": "IROS 2025",
        "iros25code": "Code",
        "iros25paper": "Paper",
        "iros25video": "Video",
        "iros25authors": "<b>Yue Lin</b>, Xiaoxuan Zhang, Yang Liu, Dong Wang, Huchuan Lu",
        "iros25details": "We propose a perception-aware trajectory planning framework with geometric feature metrics to improve the localization accuracy of autonomous robots. This method improves the LiDAR localization accuracy during navigation by enabling the robot to actively avoid areas that cause high localization errors.",

        "iros24": "IROS 2024",
        "iros24code": "Code",
        "iros24paper": "Paper",
        "iros24video": "Video",
        "iros24authors": "<b>Yue Lin</b>, Yang Liu, Pingping Zhang, Xin Chen, Dong Wang, Huchuan Lu",
        "iros24details": "We propose a two-stage trajectory planning framework that prioritizes the robot's trajectory safety and then plans the robot's orientation to ensure target visibility. Our method enables the robot to safely follow a target in complex dynamic environments.",

        "ral25": "RA-L Submission",
        "ral25code": "Code",
        "ral25paper": "Paper",
        "ral25video": "Video",
        "ral25authors": "<b>Yue Lin</b>, Yang Liu, Dong Wang, Huchuan Lu",
        "ral25details": "We designed a target tracking method for quadrotors without building environmental ESDF or safe flight corridors. We propose the pre-built FOV-ESDF to optimize target visibility, allowing the drone to stably track the target in complex environments and avoid collision and target occlusion.",
        
        "projects": "Projects",

        "nsfc_code": "Code",
        "nsfc_video": "Video",
        "nsfc": "NSFC Major Project",
        "nsfc_title": "Learning Active Perception and Adversarial Game Modeling of Single-agent",
        "nsfc_details": "We use the RoboMaster2020 standard AI robot to conduct 1v1 fully automatic confrontation games. The robot can actively perceive the environment and enemy target, and establish intelligent strategies to automatically conduct confrontation games.",

        "tsinghua_video": "Video",
        "tsinghua": "Tsinghua University Exchange & NSFC Major Project",
        "tsinghua_title": "Methods and Applications of Multi-agent Confrontation Games in Open Environments",
        "tsinghua_details": "We developed multi-robot collaborative capture algorithms in open environments, including environmental perception, target recognition, motion planning, and strategy learning, so that the robot swarm can quickly and accurately capture an intelligent escaping target in unknown environments.",

        "201code": "Code",
        "201video": "Video",
        "201": "201 Institute Cooperation Project",
        "201title": "Research on Lightweight Object Tracking Method Based on Transformers",
        "201details": "We developed a high-precision, lightweight single object tracking model based on Transformer for the 201 Institute. The model shows robust performance for small targets and frequently occluded targets, and can run in real time at 110 FPS on edge devices such as JetSon Orin NX.",

        "competitions": "Competition",

        "icra22web": "Website",
        "icra22video": "Video",
        "icra22": "4th in the World",
        "icra22authors": "Shiyao Li, <b>Yue Lin</b>, Zuyao You, Jiansong Pei, Zeyun Wang, Feilong Wang",
        "icra22details": "We developed lightweight visual recognition and navigation algorithms in a simulation environment, which enabled the robot to autonomously search and grab the corresponding ores, and transport them to the designated location through autonomously navigation. The algorithms developed in the simulation environment can be directly deployed on the real robot."
    },

    "zh": {
        "name": "林跃",

        "profile": "你好，我是林跃，这个网站是关于我的简短介绍。<br>我于 2023 年在大连理工大学获得工学学士学位，并获得 IIAU Lab 的硕士研究生推免资格。<br>我的导师是卢湖川教授，研究方向是机器人自主运动规划和视觉跟踪。<br>目前，我是杭州海康威视的实习生，从事机器人自主导航算法的开发。",

        "papers": "论文",

        "iros25": "IROS 2025",
        "iros25code": "代码",
        "iros25paper": "论文",
        "iros25video": "视频",
        "iros25authors": "<b>林跃</b>，张晓璇，刘洋，王栋，卢湖川",
        "iros25details": "为了提高自主机器人在导航过程中的定位精度，本文提出了一种基于几何特征度量的感知规划方法。通过使机器人主动避免可能造成高定位误差的几何特征缺失的退化区域来提高导航过程中的雷达定位精度。",

        "iros24": "IROS 2024",
        "iros24code": "代码",
        "iros24paper": "论文",
        "iros24video": "视频",
        "iros24authors": "<b>林跃</b>，刘洋，张平平，陈鑫，王栋，卢湖川",
        "iros24details": "机器人自主跟随目标时需要实时避免环境中的静态和动态障碍物，并保持目标的可见性。本文提出了一种两阶段轨迹规划框架，优先保证机器人的轨迹安全性，然后规划机器人的朝向以保证目标可视性。本文提出的方法使机器人可以在复杂的动态环境中安全地跟随目标。",

        "ral25": "RA-L 在投",
        "ral25code": "代码",
        "ral25paper": "论文",
        "ral25video": "视频",
        "ral25authors": "<b>林跃</b>，刘洋，王栋，卢湖川",
        "ral25details": "为了让四旋翼飞行器在复杂环境中安全地自主跟随目标，并主动避免视野被障碍物遮挡，本文为设计了一种无需构建环境 ESDF 和安全飞行走廊的目标跟随方法，利用预构建的 FOV-ESDF 进行目标可视性优化，大大降低了规划过程中的计算复杂度，使得无人机能在复杂的环境中稳定地跟随目标，避免碰撞和目标遮挡。",

        "projects": "项目",

        "nsfc_code": "代码",
        "nsfc_video": "视频",
        "nsfc": "国家自然科学基金重大项目",
        "nsfc_title": "单智能体主动感知和对抗博弈建模学习",
        "nsfc_details": "本项目以单智能体在环境中的全自主感知、规划和决策为研究内容，使用 RoboMaster2020 标准 AI 机器人实现了 1v1 全自动对抗博弈。机器人能够主动感知环境和敌方目标，并建立智能策略自动进行对抗博弈。",

        "tsinghua_video": "视频",
        "tsinghua": "清华大学交流项目，国家自然科学基金重大项目",
        "tsinghua_title": "开放环境多智能体群智对抗博弈理论方法及应用",
        "tsinghua_details": "本项目以多智能体在开放环境中的感知、规划、决策和协同为研究内容，开发了在开放环境下的多机器人协同围捕系统，包含环境感知、目标识别、运动规划、策略学习等算法，使得机器人集群能够快速地在未知环境下对智能逃逸的目标实行精准围捕。",

        "201code": "代码",
        "201video": "视频",
        "201": "中国北方车辆研究所合作项目",
        "201title": "基于 Transformer 的轻量化目标跟踪方法研究",
        "201details": "基于 Transformer 的高精度目标跟踪模型往往具有很高的参数量和计算量，无法在边缘设备实时运行。本项目为中国北方车辆研究所开发了基于 Transformer 的高精度、轻量化的单目标跟踪模型，模型对小型目标和频繁被遮挡的目标表现出鲁棒的性能，可以在 JetSon Orin NX 边缘计算设备上以 110 FPS 的帧率实时运行。",

        "competitions": "竞赛",

        "icra22web": "网页",
        "icra22video": "视频",
        "icra22": "全球第四名",
        "icra22authors": "李世垚，<b>林跃</b>，尤祖尧，裴健淞，王泽允，王飞龙",
        "icra22details": "在仿真环境中开发轻量化视觉识别算法和导航算法，使得机器人能够在环境中自主寻找和抓取相应的矿石，并通过自主导航将其运送到指定的位置，全程不需要人工干预。在仿真环境中开发的算法可以直接部署到真实的机器人上。"
    }
}

let language = "en";

function update()
{
    Object.entries(text[language]).forEach(([key, value]) => {
        const element = document.getElementById(key);
        element.style.opacity = 0;
        setTimeout(() => {
            element.innerHTML = value;
            element.style.opacity = 1;
        }, 300);
    });
    document.querySelectorAll(".details").forEach((details) => {
        setTimeout(() => {
            if(details.classList.contains("hidden"))
                details.classList.remove("hidden");
            details.style.height = details.scrollHeight + "px";
        }, 350);
    });
}

function translation()
{
    language = (language === "zh" ? "en" : "zh"); update();
}