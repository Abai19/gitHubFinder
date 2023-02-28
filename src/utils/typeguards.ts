import { GithubUser } from './../types/user';
const isGithubUser = (user: any): user is GithubUser => "id" in user
export default isGithubUser