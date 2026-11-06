# Husky Robotics website

The public website for Hillcrest High School’s FIRST Team 4585.

## Editing and publishing

This repository contains the static HTML that Netlify publishes. There is no build step or dependency installation. Edit the relevant `index.html` file, with shared styling in `styles/` and interactions in `scripts/site.js`.

Push changes to `main` in [Team4585/Website](https://github.com/Team4585/Website). Netlify automatically publishes that commit to [husky-robotics.netlify.app](https://husky-robotics.netlify.app/). Check the resulting deploy before considering the change complete.

To preview locally, run `python3 -m http.server 8080` from the repository root and open `http://localhost:8080/`. Check both wide and phone layouts, sponsor links, navigation, news filters, and sponsorship tiers before pushing.

## Facts to keep consistent

- The 2026–2027 team has 35 students. Older articles may describe an earlier roster.
- The annual planning budget is $45,000, including $20,000 for travel. It plans for two regionals and the FIRST Championship if the team qualifies. Actual expenses may vary.
- Students pay no membership or team travel fees.
- The homepage and support page both show the sponsor wall. Update both when changing sponsors.
- Fabworks and Mad Spark Coatings were added by the team. The Dalton Family and JEB remain text entries without unverified website links.
- Keep historical outreach totals labeled by year. Check event dates against official FIRST listings.
- Keep the same six navigation links and the “Support / Join” label on every page; only the active-page marker changes.
- Record 2020–2021 as pandemic-era history, separately from the normal robot grid. Corellius competed at Utah in March 2020 before later events were cancelled; 2021 used remote challenges and judging. The 2021 Chairman’s Award remains part of the team’s history. See the official [2020](https://frc-events.firstinspires.org/2020/team/4585) and [2021](https://frc-events.firstinspires.org/2021/team/4585) records.
- Use verified robot photographs for robot records. If no photo is available, use a year label instead of a photograph from another season or a team celebration.

## Sponsor artwork

Artwork is stored locally in `assets/sponsors/`:

- Comcast NBCUniversal: transparent vector from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Comcast_NBCUniversal_logo.svg).
- Motorola Solutions Foundation: transparent mark from its [official foundation page](https://www.motorolasolutions.com/en_us/about/motorola-solutions-foundation.html), displayed on a dark card.
- Utah STEM Action Center: transparent mark from its [official site](https://stem.utah.gov/).
- Fabworks: the upright black `fw` and blue period cropped from its [official FIRST Robotics article artwork](https://www.fabworks.com/blog/fabworks-for-first). Keep this approved mark rather than a typeset approximation.
- Mad Spark Coatings: artwork from its [official site](https://www.madsparkcoatings.com/).
- Gene Haas Foundation, Boeing, DoWSTEM, L3Harris, and Rocky Mountain Power Foundation: artwork from the team-supplied sponsorship packet.

## Repository privacy

Keep local home-folder paths, account credentials, `.netlify/`, and Finder metadata out of commits. Use a GitHub no-reply email for commit authorship when a private email should stay private.
