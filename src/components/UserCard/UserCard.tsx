
import UserTitle from '../UserTitle/UserTitle';
import { LocalGithubUser } from 'types';
import UserStat from '../UserStat/UserStat';
import styles from './UserCard.module.scss';
import  UserInfo  from '../UserInfo/UserInfo';

interface UserCardProps extends LocalGithubUser {}

 const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard} >
    <img src={props.avatar} alt={props.login} className={styles.avatar}/>
    <UserTitle 
      created={props.created}
      login={props.login}
      name={props.name}
    />
    <p className={`${styles.bio} ${!props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
      <UserStat 
          followers={props.followers}
          repos={props.repos}
          following={props.following}
      />
      <UserInfo 
          blog={props.blog}
          company={props.company}
          location= {props.location}
          twitter = {props.location}
      />
  </div>
);

export default UserCard