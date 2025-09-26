import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>AI工具分类</h3>
            <ul className="footer-links">
              <li><Link to="/tools/ai-writing">AI写作工具</Link></li>
              <li><Link to="/tools/ai-image">AI图像工具</Link></li>
              <li><Link to="/tools/ai-video">AI视频工具</Link></li>
              <li><Link to="/tools/ai-office">AI办公工具</Link></li>
              <li><Link to="/tools/ai-agent">AI智能体</Link></li>
              <li><Link to="/tools/ai-chat">AI聊天助手</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>更多工具</h3>
            <ul className="footer-links">
              <li><Link to="/tools/ai-coding">AI编程工具</Link></li>
              <li><Link to="/tools/ai-design">AI设计工具</Link></li>
              <li><Link to="/tools/ai-audio">AI音频工具</Link></li>
              <li><Link to="/tools/ai-search">AI搜索引擎</Link></li>
              <li><Link to="/tools/ai-platform">AI开发平台</Link></li>
              <li><Link to="/tools/ai-learning">AI学习网站</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>内容导航</h3>
            <ul className="footer-links">
              <li><Link to="/news">AI资讯</Link></li>
              <li><Link to="/projects">最新项目</Link></li>
              <li><Link to="/tutorials">教程资源</Link></li>
              <li><a href="#">AI专栏</a></li>
              <li><a href="#">AI问答</a></li>
              <li><a href="#">AI百科</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>关于我们</h3>
            <ul className="footer-links">
              <li><a href="#">关于AI工具集</a></li>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">隐私政策</a></li>
              <li><a href="#">使用条款</a></li>
              <li><a href="#">收录申请</a></li>
              <li><a href="#">友情链接</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 AI工具集 - 专注于AI工具导航和AI资源分享</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer