import './Header.css'


function Header(){
    return(
        <div className="Header-bar">
            <div id='Logo'>
            <img src="src\components\imagesHeader\logo-no-background.png" alt="How about?" className='logoIcon' />
            </div>

            <div className='Topic'>
            <a>My Feed</a>
            <a>Explore</a>
            <a>Bookmarks</a>
            <a >More</a>
            </div>


            <div className='searchBar'>
                <button type='button' aria-label='Open searchbar' className='buttonSeach'>
                    <img src="src\components\imagesHeader\seachIcon.png" alt="search" className='Search'/>
                </button>
            </div>


            <div className='iconDiv'>
                <img src="src\components\imagesHeader\accountIcon.png" alt="account" className='ProfIcon' />
            </div>

        </div>
    )
}
export default Header