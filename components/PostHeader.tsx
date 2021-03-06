import React from 'react';
import WhenPosted from '../components/WhenPosted';
import { AvailableGradients, variants } from './CSSGradients';
import Nav from './NavigationMenu';

export type HeaderProps = {
  title: string;
  date: string;
  headerStyle: AvailableGradients;
};

const PostHeader: React.FC<HeaderProps> = ({ title, date, headerStyle }) => (
  <>
    <header>
      <div className='wrapper'>
        <Nav leftAligned />
        <h1 className='title'>{title}</h1>
        <WhenPosted dateTime={date} />
      </div>
    </header>
    <style jsx>{`
      header {
        padding: 0 1rem;
        flex-basis: 100%;
        flex-grow: 1;
        min-height: 100%;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        ${variants[headerStyle]}
      }

      .title {
        font-weight: 100;
      }
    `}</style>
  </>
);

export default PostHeader;
