import { useState, useEffect } from 'react';
import NftCard from '../components/NftCard';
import NftModal from '../components/NftModal';
import Globe from '../components/Globe';
import {GlobeIcon} from "../utils";
function NftGallery() {
    const [showGlobe, setShowGlobe] = useState(true);
    const [nfts, setNfts] = useState([]);
    const [selectedNft, setSelectedNft] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    const handleHexInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
    };

    const handleClear = () => {
        setWalletAddress('');
    };

    const handleSubmit = () => {
        setWalletAddress(inputValue);
    };

    useEffect(() => {
        // Using goerli as I have more assets on that chain, so that we see a 'fuller' list

        // Strange issue between IDEs, I use WebStorm normally but wanted to open it with VS code just to test it
        // and for some reason VS code is not picking up my .env variables. If you run into this issue on your IDE,
        // please just uncomment the following line 32 and use it instead of line 33.
        // const endpoint = 'https://eth-goerli.alchemyapi.io/v2/[your-key]';
        const endpoint = `https://eth-goerli.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`;
        const fetchNfts = async (owner, setNfts) => {
            if (owner) {
                let data;
                try {
                    data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then(data => data.json())

                } catch (e) {
                    console.error("Error fetching NFTs", e);
                }

                setNfts(data.ownedNfts)
                return data.ownedNfts;
            }
        }
        if (walletAddress) {
            fetchNfts(walletAddress, setNfts).then(r => console.log(r))
        }
    }, [walletAddress]);

    return (
        <>
            {!showGlobe &&
                <div className="globe-icon-container" key="globe-icon-container">
                    <GlobeIcon key="globe-icon" />
                </div>

            }
            {walletAddress &&
                <div className="gallery-header">
                    <div>
                        <div className="disconnect">
                            <input
                                className="wallet-input-gallery"
                                type="text"
                                id="hex-input"
                                value={walletAddress}
                                readOnly={true}
                            />
                            <button
                                className="wallet-input-clear"
                                onClick={handleClear}
                            >
                                x
                            </button>
                        </div>
                    </div>
                </div>
            }
            <div className="nft-gallery">
                <>
                    {walletAddress ? (
                        <>
                            {nfts && nfts.map((nft, index) => (
                                <NftCard
                                    key={index}
                                    nft={nft}
                                    owner={walletAddress}
                                    onClick={() => setSelectedNft(nft.id)}
                                />
                            ))}
                            {selectedNft && (
                                <NftModal
                                    key={selectedNft.id}
                                    nft={nfts.find(nft => nft.id === selectedNft)}
                                    owner={walletAddress}
                                    onClose={() => setSelectedNft(null)}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            {showGlobe ? (
                                <Globe
                                    key={showGlobe ? 'globe' : 'dashboard'}
                                    setShowGlobe={setShowGlobe}
                                />
                            ) : (
                                <div className={`dashboard ${!showGlobe ? "fade-in" : ""}`}>
                                        <h1>NFT Database: Earth / Terra</h1>
                                        <h2>Last Update: August 17th, 2112</h2>
                                        <input
                                            type="text"
                                            id="hex-input"
                                            onChange={handleHexInputChange}
                                            placeholder=" Enter Wallet Address">
                                        </input>
                                    <button
                                        className="submit-button"
                                        onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </>
            </div>
        </>
    );
}

export default NftGallery;