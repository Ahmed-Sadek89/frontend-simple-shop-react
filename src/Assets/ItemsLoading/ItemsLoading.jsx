const ItemsLoading = () => {
    const loop = [1,2,3,4,5,6,7,8]
    return(
    <>
    {
    loop?.map(i => (
        
            <div className="product" key={i}>
                <div className="loading image1"></div>
                <span className="loading item-1"></span>
            </div>
        
    ))
    }
    </>
    )
}
export default ItemsLoading