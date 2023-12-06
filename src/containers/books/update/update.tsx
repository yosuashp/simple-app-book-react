import { Box, TextField, Switch, Stack, styled } from '@mui/material';
import CommonPage from '../../../components/common-page/common-page';
import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import useUpdate from './update.hooks';

const VisuallyHiddenInput = styled('input')`
  display: none;
`;

export default function Update() {
  const {
    formValues,
    handleSubmit,
    handleUploadCover,
    loadingCover,
    loadingSubmit,
    setFormValues,
    fileItem,
  } = useUpdate();
  return (
    <CommonPage
      withBack
      component={'form'}
      title="Update Book"
      actionElement={
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loadingSubmit}
        >
          Submit
        </LoadingButton>
      }
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          width: '50%',
        }}
      >
        <TextField
          name="title"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Title"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              title: e.target.value,
            })
          }
          variant="filled"
          value={formValues?.title}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="author"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Author"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              author: e.target.value,
            })
          }
          value={formValues?.author}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="isbn"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="ISBN"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              isbn: e.target.value,
            })
          }
          value={formValues?.isbn}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="published_year"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Published Year"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              published_year: e.target.value,
            })
          }
          value={formValues?.published_year}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="genre"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Genre"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              genre: e.target.value,
            })
          }
          value={formValues?.genre}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="total_copies"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Total Copies"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              total_copies: Number(e.target.value),
            })
          }
          value={formValues?.total_copies}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="copies_available"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Copies Available"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              copies_available: Number(e.target.value),
            })
          }
          value={formValues?.copies_available}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <LoadingButton
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          sx={{ mb: 3 }}
          loading={loadingCover}
        >
          Upload Book Cover
          <VisuallyHiddenInput
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleUploadCover}
          />
        </LoadingButton>
        {fileItem && fileItem.url && (
          <Box>
            <img
              src={fileItem.secure_url}
              alt="preview"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Box>
        )}
        <Box>
          <Stack direction={'row'} alignItems={'center'}>
            <div>Publish</div>
            <Switch
              name="published"
              title="Published"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  published: Boolean(e.target.checked),
                })
              }
              checked={formValues?.published}
            />
          </Stack>
        </Box>
      </Box>
    </CommonPage>
  );
}