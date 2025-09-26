import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">AI</span>
          <span>AI工具集</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                首页
              </Link>
            </li>
            <li>
              <Link to="/tools/ai-writing" className={`nav-link ${location.pathname.includes('/tools/') ? 'active' : ''}`}>
                AI工具
              </Link>
            </li>
            <li>
              <Link to="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`}>
                AI资讯
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
                最新项目
              </Link>
            </li>
            <li>
              <Link to="/tutorials" className={`nav-link ${isActive('/tutorials') ? 'active' : ''}`}>
                教程资源
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header