const List = ({Database}) => {
    return (
         <div className="DataBase">
            {Database.map((data) => (
                <div className="blog-preview border border-info-50 text-center bg-light" key={data.id}>
                    <h5>{ data.City }</h5>
                    <h5>{ data.Gender }</h5>
                    <h5>{ data.Age }</h5>
                    <h5>{ data.Sport }</h5>
                    <h5>{ data.Date }</h5>
                </div>    
            )
            )}
        </div>
      );
}
 
export default List;