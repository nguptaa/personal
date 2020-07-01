import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card, Button } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import repoIcon from 'assets/icons/repo.svg';
import { Fade } from 'react-reveal';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Projects = () => {
  const {
    github: {
      user: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          user(login: "nguptaa") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              edges {
                node {
                  ... on GitHub_Repository {
                    name
                    description
                    forkCount
                    stargazers {
                      totalCount
                    }
                    url
                    id
                    diskUsage
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Fade bottom duration={1000} distance="20px">
      <Wrapper as={Container} id="projects">
        <h1>Projects</h1>
        <Grid>
          {edges.map(({ node }) => (
            <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
              <Card>
                <Content>
                  <div className="repo-name">
                    <img src={repoIcon} alt="repo" />
                    <h3>{node.name}</h3>
                  </div>
                  <p>{node.description}</p>
                </Content>
                <Stats>
                  <div className="repo-left">
                    <div className="repo-lang">
                      <span className="language-color" style={{ backgroundColor: node.primaryLanguage.color }}></span>
                      <span>{node.primaryLanguage.name}</span>
                    </div>
                    <div>
                      <img src={starIcon} alt="stars" />
                      <span>{node.stargazers.totalCount}</span>
                    </div>
                    <div>
                      <img src={forkIcon} alt="forks" />
                      <span>{node.forkCount}</span>
                    </div>
                  </div>
                  <div className="repo-right">
                    <span>{node.diskUsage} KB</span>
                  </div>
                </Stats>
              </Card>
            </Item>
          ))}
        </Grid>
        <div className="seeMoreProjects">
          <a href="https://github.com/nguptaa?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button>See More</Button>
          </a>
        </div>
      </Wrapper>
    </Fade>
  );
};
