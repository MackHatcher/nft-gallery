import { truncateAddress } from '../utils';
function NftModal({ nft, owner, onClose }) {
    return (
        <div className="nft-modal">
            <div className="nft-modal-header">
                <button className="nft-modal-close" onClick={onClose}>X</button>
                <h1 className="glow">{nft.title}</h1>
            </div>
            <img className="nft-modal--profile-img" src={nft.metadata.image} alt={nft.name} />
            <div className="nft-modal--body">
                <div className="description-container">
                    <h4 className="label">{nft.description}</h4>
                </div>
                <h4 className="label">Owner: {truncateAddress(owner)}</h4>
                <a
                   className="glow"
                   href={`https://goerli.etherscan.io/token/${nft.contract.address}`}>View on Etherscan</a>
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Trait Type</th>
                            <th>Trait Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {nft.metadata.attributes.map((attribute, index) => (
                            <tr key={index}>
                                <td>{attribute.trait_type}</td>
                                <td>{attribute.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <a
                    className="glow"
                    href={`https://testnets.opensea.io/assets/goerli/${nft.contract.address}/${parseInt( nft.id.tokenId, 16).toString()}`} target="_blank" rel="noopener noreferrer">Purchase on OpenSea</a>
            </div>
        </div>
    );
}

export default NftModal;