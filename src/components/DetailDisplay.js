import { Link } from "react-router-dom";

const DetailDisplay = ({ offerInfos }) => {
  //   console.log(props);
  return (
    <Link to={`/offer/${offerInfos._id}`}>
      <article>
        <div>
          {offerInfos.owner.account.avatar && (
            <img
              style={{
                height: 50,
                width: 50,
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={offerInfos.owner.account.avatar.secure_url}
              alt="owner"
            />
          )}
          <span>{offerInfos.owner.account.username}</span>
        </div>
        <img
          src={offerInfos.product_image.secure_url}
          alt="product"
          style={{ height: 400, width: 200, objectFit: "cover" }}
        />
        <p>{offerInfos.product_price} €</p>
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          {offerInfos.product_details.map((detail, index) => {
            console.log(detail);
            if (detail.TAILLE) {
              return <p key={index}>{detail.TAILLE}</p>;
            } else if (detail.MARQUE) {
              return <p key={index}>{detail.MARQUE}</p>;
            } else {
              return null;
            }
          })}
        </div>
      </article>
    </Link>
  );
};

export default DetailDisplay;
