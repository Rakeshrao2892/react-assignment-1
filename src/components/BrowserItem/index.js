import './index.css'

const BrowserItem = props => {
  const {browserDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-items">
      <div className="history">
        <p className="time-access">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <h1 className="title">{title}</h1>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        onClick={onDelete}
      />
    </li>
  )
}

export default BrowserItem
