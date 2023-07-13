import React from "react";
import s from './NavbarFriendsBlock.module.css';
import NavbarFriendsBlockItem from "./NavbarFriendsBlockItem";


const NavbarFriendsBlock = (props) => {
    
    
    let friendsNameAndAvas = props.friendList.map(fr => <NavbarFriendsBlockItem name={fr.name} avatar={fr.avatar}/>)
    
    
    return (
        <div className={s.block}>
            <div className={s.nameAndAvasTitle}>
                <div className={s.noopacity}>
                    <h4>Friend list</h4>
                    {friendsNameAndAvas}
                </div>
            </div>
        </div> )
            }

export default NavbarFriendsBlock;