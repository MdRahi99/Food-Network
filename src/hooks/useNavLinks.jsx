import home from '../../public/images/home-01.png';
import dashboard from '../../public/images/dashboard-circle.png';
import message from '../../public/images/message.png';
import videos from '../../public/images/videos.png';
import more from '../../public/images/more-01.png';

const navLinks = [
    { route: '/', label: 'Home', image: home },
    { route: '/dashboard', label: 'Dashboard', image: dashboard },
    { route: '/message', label: 'Message', image: message },
    { route: '/videos', label: 'Videos', image: videos },
    { route: '/more', label: 'More', image: more },
];

const useNavLinks = () => {
    return [navLinks];
};

export default useNavLinks;