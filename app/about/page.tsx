'use client';
import { Services } from '@/components/common/Services';
import { Stats } from '@/components/about/Stats';
import { Story } from '@/components/about/Story';
import { Team } from '@/components/about/Team';
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <Story />
      <Stats />
      <Team />
      <Services />
    </MainLayout>
  );
};

export default About;
