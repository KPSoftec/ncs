import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'
import {
  AppContainer,
  AppLayoutContainer,
  Logo,
  Wrap,
  WrapRight,
  Search,
  SearchTerm,
  SearchButton,
  FilterTerm,
} from './styles'

import {
  Grid, GridRow,
  GridColumn, SmallSectionContainer,
} from '../../style/styles'

import { propTypes, defaultProps } from './types'
import { mapStateToProps, mapDispatchToProps } from './connect'

const Welcome = (props) => {
  const {
    albumInfo, getAlbumInfo,
  } = props
  const [albums, setAlbums] = useState(null)
  const [filterBy, setFilterBy] = useState('releaseYear')
  // Initial API Call
  useEffect(() => {
    getAlbumInfo()
  }, [getAlbumInfo])

  useEffect(() => {
    setAlbums(_.sortBy(albums,
      (d) => d[filterBy]))
  }, [filterBy])

  // data retrival // componentDidUpdate
  useEffect(() => {
    setAlbums(albumInfo && albumInfo.data && albumInfo.data.entries)
  }, [albumInfo])

  return (
    <AppLayoutContainer>
      <AppContainer>

        <Grid noBorder>
          <GridRow>
            <GridColumn xs>
              <Wrap>
                <Search>
                  <SearchTerm
                    onChange={(e) => {
                      if (e.target.value.length >= 3) {
                        setAlbums(_.filter(albumInfo && albumInfo.data && albumInfo.data.entries,
                          (d) => d.title.toLowerCase().indexOf(e.target.value) >= 0))
                      } else {
                        setAlbums(albumInfo && albumInfo.data && albumInfo.data.entries)
                      }
                    }}
                    type="text"
                    placeholder="What are you looking for?"
                  />
                  <SearchButton type="submit" disabled>
                    🔍
                  </SearchButton>
                </Search>
              </Wrap>
            </GridColumn>
            <GridColumn xs>
              <WrapRight>
                <FilterTerm
                  value={filterBy}
                  onChange={
                    (e) => {
                      setFilterBy(e.target.value)
                    }
                  }
                  className="form-control"
                >
                  <option value="releaseYear">Order by Release Year</option>
                  <option value="title">Order by Title</option>
                </FilterTerm>
              </WrapRight>
            </GridColumn>
          </GridRow>
        </Grid>

        <Grid>

          <GridRow noBorder>

            {albums && albums.data && albums.data.total < 1 ? <h1>LOADING</h1>
              : _.sortBy(albums,
                (d) => d[filterBy]).map((item, index) => (
                  <GridColumn xs={6} sm={6} md={4} lg={3} data-test-id="column-1" key={`item-${item.title + index}`}>
                    <SmallSectionContainer minHeight="auto">
                      <Logo aria-label="A N Z Logo" data-test-id="header-logo" src={item.images['Poster Art'].url} alt="Logo" />
                      <br />
                      <h1 data-test-id="app-title">
                        {item.title}
                      </h1>
                      <span>
                        {item.programType}
                        {' '}
                        (
                        {item.releaseYear}
                        )
                      </span>
                    </SmallSectionContainer>
                  </GridColumn>
              ))}

          </GridRow>

        </Grid>
      </AppContainer>
    </AppLayoutContainer>
  )
}

Welcome.defaultProps = defaultProps
Welcome.propTypes = propTypes

const ConnectedWelcome = connect(mapStateToProps, mapDispatchToProps)(Welcome)
export default ConnectedWelcome
