package com.example.backend.geo;

import java.util.Collection;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

/**
 * Read-only queries for the map and search box. The class names inside
 * "select new" must match your package - keep them in sync if you move these files.
 */
public interface GeoRepository extends Repository<County, Long> {

    @Query("""
            select new com.example.backend.geo.CountyDto(
                c.name, c.province, c.country, c.stadium,
                c.primaryColour, c.secondaryColour, c.tertiaryColour,
                c.mapCenterLng, c.mapCenterLat, c.mapZoom)
            from County c
            order by c.name
            """)
    List<CountyDto> findCounties();

    @Query("""
            select new com.example.backend.geo.PitchMarkerDto(
                p.id, g.id, g.name, c.name, p.name, p.latitude, p.longitude)
            from Pitch p
            join p.club g
            join g.county c
            where lower(c.name) = lower(:county)
            order by g.name, p.id
            """)
    List<PitchMarkerDto> findPitchMarkers(@Param("county") String county);

    @Query("""
            select new com.example.backend.geo.ClubRow(g.id, g.name, c.name)
            from Club g
            join g.county c
            where lower(g.name) like lower(concat('%', :term, '%'))
            order by g.name
            """)
    List<ClubRow> searchClubs(@Param("term") String term, Pageable pageable);

    @Query("""
            select new com.example.backend.geo.ClubPitchRow(
                p.club.id, p.id, p.name, p.latitude, p.longitude)
            from Pitch p
            where p.club.id in :clubIds
            order by p.id
            """)
    List<ClubPitchRow> findPitchesForClubs(@Param("clubIds") Collection<Long> clubIds);
}
