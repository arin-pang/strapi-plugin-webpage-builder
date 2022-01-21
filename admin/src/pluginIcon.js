import React from 'react';
import { Icon } from '@strapi/parts/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pluginIcon = () => <Icon as={() => <FontAwesomeIcon icon="paint-brush" />} width="16px" />;

export default pluginIcon;
