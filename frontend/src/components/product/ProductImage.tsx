interface productImageProps {
    image: string,
    name: string
}


export default function ProductImage(props: productImageProps) {
    return (
        <div className="col-2">
            <img className="large" src={props.image} alt={props.name}></img>
        </div>
    )
}