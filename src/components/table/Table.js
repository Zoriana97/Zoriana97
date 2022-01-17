
import './Table.css';

const Table = ({ data, onRowClick, columns, placeholder }) => {
    return (
        <div className="table">
            <div className='table-header'>
                {columns.map(({ title }) => (
                    <div key={title} className='table-header-cell'>
                        {title}
                    </div>
                ))}
            </div>
            <div className={`table-body ${onRowClick ? "clickable" : ""}`}>
                {data.length > 0 ? data.map((item) => (
                    <div key={item.id} className="table-row" onClick={() => onRowClick(item)}>
                        {columns.map(({ title, render }) => (
                            <div key={`${item.id}-${title}`} className="table-cell">
                                {render(item)}
                            </div>
                        ))}
                    </div>
                )) : <div className="table-placeholder">{placeholder}</div>}
            </div>
        </div>
    )
}

export default Table;

