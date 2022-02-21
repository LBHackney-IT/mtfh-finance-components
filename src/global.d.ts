// https://stackoverflow.com/questions/45420448/how-to-import-external-type-into-global-d-ts-file
declare module '*.module.css';
declare module '*.svg';
declare module '*.module.scss';

declare module 'react-loader-spinner' {
  export interface LoaderProps {
    className?: string;
  }
}
