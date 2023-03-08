import { truncateAddress } from '../utils.js';
function NftCard({ nft, owner, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card--header">
                <h1 className="glow">{nft.title}</h1>
            </div>

                <div className="card--body">
                    <img className="card--profile-img glowing-img" src={nft.metadata.image}
                         alt={nft.title}
                         title={nft.title}
                    />
                </div>
            <h4>Owner: {truncateAddress(owner)}</h4>

        </div>
    );
}

export default NftCard;