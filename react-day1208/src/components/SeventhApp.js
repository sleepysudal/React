import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
  
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function SeventhApp(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [food,setFood]=useState('../image2/1.jpg');
    const [name,setName]=useState('샌드위치');
    const selFood=(e)=>{
        setFood(`../image2/${e.target.value}.jpg`);
        setName(e.target.options[e.target.selectedIndex].text);
    }

    return (
        <div>
            <h3 className='alert alert-info'>SevenApp_mui실습</h3>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="냠냠's V-log"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={food}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            오늘은 샌드위치 만드는 법을 알아볼거예요!
                        </Typography>
                        <Typography paragraph>
                            그런데 요즘 날씨가 매우 춥더라고요. 여러분은 감기 조심하세요.
                            그리고 추운 날씨에는 군고구마가 땡기지 않나요?
                        </Typography>
                        <Typography paragraph>
                            저는 호빵과 우유를 함께 먹는 걸 정말 좋아하는데요,
                            여러분의 의견은 어떠신지 댓글로 남겨주세요!
                        </Typography>
                        <Typography>
                            그럼 다음 브이로그에서 봬요. 안녕!
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            {/* 오늘의 과제 */}
            <div>
                <h3>좋아하는 음식을 선택하세요</h3>
                <select onChange={selFood}>
                    <option value='1'>샌드위치</option>
                    <option value='2'>꼬치구이</option>
                    <option value='3'>육개장칼국수</option>
                    <option value='4'>뷔르기뇽</option>
                    <option value='5'>콘치즈</option>
                    <option value='6'>김치볶음밥</option>
                    <option value='7'>빠에야</option>
                    <option value='8'>통샌</option>
                    <option value='9'>연근조림</option>
                    <option value='10'>스팸마요</option>
                    <option value='11'>오렌지프라페</option>
                    <option value='12'>순두부라면</option>
                </select>
            </div>

            <div>
                <h3>배열생성후 이미지 선택하기</h3>
                <select onChange={selFood}>
                    {
                        //1~12 반복해서 option제공
                        [...new Array(12)].map((item,index)=>(<option>{index+1}</option>))
                    }
                </select>
            </div>
        </div>
    );
}

export default SeventhApp;