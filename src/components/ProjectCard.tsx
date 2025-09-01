import { Box, Typography, Stack, Chip } from "@mui/material";

export interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  tags: string[];
  description: React.ReactNode;
  link: string;
}

const ProjectCard = ({
  image,
  alt,
  title,
  tags,
  description,
  link,
}: ProjectCardProps) => (
  <Box
    component="a"
    href={link}
    target="_blank"
    sx={{ textDecoration: "none" }}
  >
    <Box
      sx={{
        boxShadow: 2,
        borderRadius: 2,
        p: 2,
        bgcolor: "background.paper",
        height: "100%",
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          width: "100%",
          borderRadius: 8,
          maxHeight: 180,
          objectFit: "cover",
        }}
      />
      <Typography variant="h6" mt={2}>
        {title}
      </Typography>
      <Stack direction="row" mt={1} flexWrap="wrap" useFlexGap>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{ m: 0.5, padding: 0.5 }}
            color="info"
            variant="outlined"
          />
        ))}
      </Stack>
      <Typography variant="body2" mt={2}>
        {description}
      </Typography>
    </Box>
  </Box>
);

export default ProjectCard;
